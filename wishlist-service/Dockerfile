FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN npx prisma generate
RUN pnpm build

EXPOSE 3000

CMD sh -c "pnpm prisma:migrate || true && pnpm start:prod || pnpm start"
