import dotenv from 'dotenv';
dotenv.config();

export interface Config {
  aws: {
    region: string;
  };
  dynamodb: {
    tableName: string;
  };
  port: number;
}

export const config: Config = {
  aws: {
    region: process.env.AWS_REGION || 'eu-west-3',
  },
  dynamodb: {
    tableName: process.env.DYNAMODB_TABLE_NAME || 'ZeroKnowledgeStorage',
  },
  port: parseInt(process.env.PORT || '3000'),
};
