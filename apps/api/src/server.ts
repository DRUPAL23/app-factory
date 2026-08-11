import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';

const app = Fastify({ logger: true });

await app.register(cors);
await app.register(helmet);

app.get('/health', async () => ({ status: 'ok', service: 'api', timestamp: new Date().toISOString() }));

app.get('/v1', async () => ({ name: 'AI Ad & Affiliate Platform API', version: '0.1.0' }));

const port = Number(process.env.PORT ?? 3001);
const host = process.env.HOST ?? '0.0.0.0';

await app.listen({ port, host });
