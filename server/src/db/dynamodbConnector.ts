import {
  DynamoDBClient,
  PutItemCommand,
  GetItemCommand,
  DeleteItemCommand,
  QueryCommand,
  UpdateItemCommand,
  AttributeValue,
  UpdateItemCommandInput,
} from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { config } from '../config/config';

interface DynamoDBItem {
  [key: string]: any;
}

class DynamoDBConnector {
  private client: DynamoDBClient;
  private tableName: string;

  constructor() {
    this.client = new DynamoDBClient({
      region: config.aws.region,
    });
    this.tableName = config.dynamodb.tableName;
  }

  async put(item: DynamoDBItem): Promise<{ success: boolean; error?: any }> {
    const params = {
      TableName: this.tableName,
      Item: marshall(item),
    };

    try {
      await this.client.send(new PutItemCommand(params));
      return { success: true };
    } catch (error) {
      console.error('Error in DynamoDB put operation:', error);
      return { success: false, error };
    }
  }

  async get(key: DynamoDBItem): Promise<{ success: boolean; data?: DynamoDBItem; error?: any }> {
    const params = {
      TableName: this.tableName,
      Key: marshall(key),
    };

    try {
      const { Item } = await this.client.send(new GetItemCommand(params));
      return { success: true, data: Item ? unmarshall(Item) : undefined };
    } catch (error) {
      console.error('Error in DynamoDB get operation:', error);
      return { success: false, error };
    }
  }

  async delete(key: DynamoDBItem): Promise<{ success: boolean; error?: any }> {
    const params = {
      TableName: this.tableName,
      Key: marshall(key),
    };

    try {
      await this.client.send(new DeleteItemCommand(params));
      return { success: true };
    } catch (error) {
      console.error('Error in DynamoDB delete operation:', error);
      return { success: false, error };
    }
  }

  async query(
    keyConditionExpression: string,
    expressionAttributeValues: { [key: string]: any },
  ): Promise<{ success: boolean; data?: DynamoDBItem[]; error?: any }> {
    const params = {
      TableName: this.tableName,
      KeyConditionExpression: keyConditionExpression,
      ExpressionAttributeValues: marshall(expressionAttributeValues),
    };

    try {
      const { Items } = await this.client.send(new QueryCommand(params));
      return {
        success: true,
        data: Items ? Items.map((item) => unmarshall(item)) : [],
      };
    } catch (error) {
      console.error('Error in DynamoDB query operation:', error);
      return { success: false, error };
    }
  }

  async update(
    key: DynamoDBItem,
    updateExpression: string,
    expressionAttributeValues: { [key: string]: any },
    expressionAttributeNames: { [key: string]: string },
  ): Promise<{ success: boolean; data?: DynamoDBItem; error?: any }> {
    const params: UpdateItemCommandInput = {
      TableName: this.tableName,
      Key: marshall(key),
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: marshall(expressionAttributeValues),
      ExpressionAttributeNames: expressionAttributeNames,
      ReturnValues: 'ALL_NEW',
    };

    try {
      const { Attributes } = await this.client.send(new UpdateItemCommand(params));
      return {
        success: true,
        data: Attributes ? unmarshall(Attributes) : undefined,
      };
    } catch (error) {
      console.error('Error in DynamoDB update operation:', error);
      return { success: false, error };
    }
  }
}

export default new DynamoDBConnector();
