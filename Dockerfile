# Builder Stage
FROM node:18-alpine as builder
WORKDIR /my-space

# Install pnpm
RUN npm install -g pnpm

COPY package.json package-lock.json ./
# Use pnpm for installing dependencies
RUN pnpm install

COPY . .
RUN pnpm run build

# Runner Stage
FROM node:18-alpine as runner
WORKDIR /my-space

# Install pnpm
RUN npm install -g pnpm

COPY --from=builder /my-space/package.json .
COPY --from=builder /my-space/package-lock.json .
COPY --from=builder /my-space/next.config.mjs ./
COPY --from=builder /my-space/public ./public
COPY --from=builder /my-space/.next/standalone ./
COPY --from=builder /my-space/.next/static ./.next/static

EXPOSE 3000
ENTRYPOINT ["pnpm", "start"]

