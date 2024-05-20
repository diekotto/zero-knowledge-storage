# ---- Base Node ----
FROM node:22 AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm ci

# ---- Copy Files/Build ----
FROM dependencies AS build
COPY src ./src
RUN npm run build

# --- Release with Alpine ----
FROM node:22-alpine AS release
WORKDIR /app
COPY --from=build /app ./package.json
COPY --from=build /app ./package-lock.json
COPY --from=build /app ./dist
RUN npm ci --only=production
CMD ["npm", "start"]
EXPOSE 3000
