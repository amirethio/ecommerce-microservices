FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install

COPY . .

RUN npx prisma generate
RUN pnpm build

EXPOSE 3004

CMD sh -c "pnpm prisma:migrate && pnpm start:prod"
