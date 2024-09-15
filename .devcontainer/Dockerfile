FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu

RUN apt update 
RUN apt install -y lldb

COPY --from=denoland/deno:bin-2.0.0-rc.2 /deno /usr/bin/deno
