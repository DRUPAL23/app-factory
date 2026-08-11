import Fastify from 'fastify';
import crypto from 'node:crypto';

const app = Fastify({ logger: true });

type ClickEvent = { offerId: string; contentId?: string; placementId?: string; sessionId?: string };

app.get('/health', async () => ({ status: 'ok', service: 'tracking', timestamp: new Date().toISOString() }));

app.post<{ Body: ClickEvent }>('/v1/clicks', async (request, reply) => {
  const { offerId, contentId, placementId, sessionId } = request.body ?? {};
  if (!offerId) return reply.code(400).send({ error: 'offerId is required' });

  const clickId = crypto.randomUUID();
  return reply.code(201).send({ clickId, offerId, contentId, placementId, sessionId, recordedAt: new Date().toISOString() });
});

const port = Number(process.env.TRACKING_PORT ?? 3002);
const host = process.env.HOST ?? '0.0.0.0';
await app.listen({ port, host });
