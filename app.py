from flask import Flask, send_from_directory
from dotenv import load_dotenv
import os
import socket

# Carrega as configurações do .env
load_dotenv()

app = Flask(__name__, static_folder="web")


@app.route("/")
def index():
    return send_from_directory("web", "index.html")


@app.route("/<path:filename>")
def web_files(filename):
    return send_from_directory("web", filename)


def obter_ip_rede():
    """Obtém o endereço IP da máquina na rede local."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

    try:
        # Não precisa realmente conectar à internet.
        # Serve para descobrir qual interface de rede está sendo usada.
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = "127.0.0.1"
    finally:
        s.close()

    return ip


if __name__ == "__main__":

    ip_rede = obter_ip_rede()

    print()
    print("=" * 50)
    print("🤖 ASSISTENTE SENAI MIRASSOL")
    print("=" * 50)
    print()

    print("Projeto:", os.getenv("AZURE_VOICELIVE_PROJECT_NAME"))
    print("Agente configurado:", os.getenv("AZURE_VOICELIVE_AGENT_ID"))

    print()
    print("🌐 Página disponível em:")
    print()
    print("💻 Neste computador:")
    print("http://127.0.0.1:5000")

    print()
    print("📡 Para outros computadores da mesma rede:")
    print(f"http://{ip_rede}:5000")

    print()
    print("=" * 50)
    print()

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )