import { DynamoDBConnector } from '../db/dynamodb-connector';
import bcrypt from 'bcrypt';
import {
  UserRegistration,
  UserLogin,
  UserEntity,
  AuthenticatedUser,
  UserRegistrationDto,
  UserLoginDto,
  UserEntityDto,
  AuthenticatedUserDto,
} from '../dtos/user.dto';

class UserService {
  private dbConnector: DynamoDBConnector;
  private saltRounds: number = 10;

  constructor() {
    this.dbConnector = new DynamoDBConnector();
  }

  async register(userData: UserRegistration): Promise<{ success: boolean; message: string; error?: Error }> {
    try {
      // Validate input
      const validatedData = UserRegistrationDto.parse(userData);

      // Hash the password
      const hashedPassword = await bcrypt.hash(validatedData.password, this.saltRounds);

      // Create a new user object with the hashed password
      const newUser: UserEntity = {
        ...validatedData,
        password: hashedPassword,
        createdAt: new Date(),
      };

      const result = await this.dbConnector.put(newUser);
      if (result.success) {
        return { success: true, message: 'User registered successfully' };
      } else {
        return { success: false, message: 'Error registering user', error: result.error };
      }
    } catch (error) {
      console.error('Error registering user:', error);
      return { success: false, message: 'Error registering user', error: error as Error };
    }
  }

  async login(
    loginData: UserLogin,
  ): Promise<{ success: boolean; message: string; user: AuthenticatedUser; error?: Error }> {
    try {
      // Validate input
      const validatedData = UserLoginDto.parse(loginData);

      const result = await this.dbConnector.get({ username: validatedData.username });
      if (result.success && result.data) {
        const user = UserEntityDto.parse(result.data);
        // Compare the provided password with the stored hash
        const match = await bcrypt.compare(validatedData.password, user.password);
        if (match) {
          // Remove the password from the user data before returning
          const authenticatedUser = AuthenticatedUserDto.parse(user);
          return { success: true, message: 'Login successful', user: authenticatedUser };
        } else {
          return { success: false, message: 'Invalid username or password', user: null };
        }
      } else {
        return { success: false, message: 'Invalid username or password', user: null };
      }
    } catch (error) {
      console.error('Error logging in user:', error);
      return { success: false, message: 'Error logging in user', user: null, error: error as Error };
    }
  }
}

export default UserService;
