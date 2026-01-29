// Configuration module for MCP GitHub Repository Orchestrator & PR Reviewer
export const config = {
  appName: "MCP GitHub Repository Orchestrator & PR Reviewer",
  port: parseInt(process.env.PORT || "8080", 10),
  dbUrl: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/mcp_github_orchestrator_db",
  redisUrl: process.env.REDIS_URL || "redis://localhost:6379/0",
  isProduction: process.env.NODE_ENV === "production"
};
