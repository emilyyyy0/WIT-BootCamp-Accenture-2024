import os
import json
from flask import Flask, request, jsonify, send_from_directory
from PIL import Image
import base64
import io

app = Flask(__name__, static_folder='frontend/build', static_url_path='/')


# Local cache directory
CACHE_DIR = "image_cache"

# Create local cache directory if it doesn't exist
if not os.path.exists(CACHE_DIR):
    os.makedirs(CACHE_DIR)

def get_cached_image(text):
    """Check if an image for the given text exists in the local cache."""
    filename_png = f"{CACHE_DIR}/{text.lower()}.png"
    filename_jpeg = f"{CACHE_DIR}/{text.lower()}.jpeg"
    if os.path.exists(filename_png):
        with open(filename_png, "rb") as f:
            return base64.b64encode(f.read()).decode()
    elif os.path.exists(filename_jpeg):
        with open(filename_jpeg, "rb") as f:
            return base64.b64encode(f.read()).decode()
    return None

def save_to_cache(text, image_data):
    """Save the generated image to the local cache."""
    filename = f"{CACHE_DIR}/{text.lower()}.png"
    with open(filename, "wb") as f:
        f.write(base64.b64decode(image_data))

def generate_image(text):
    """Generate a simple colored rectangle for testing."""
    color = hash(text) % 0xFFFFFF
    img = Image.new('RGB', (100, 100), f'#{color:06x}')
    buffer = io.BytesIO()
    img.save(buffer, format='PNG')
    return base64.b64encode(buffer.getvalue()).decode()

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# @app.route("/get_image", methods=["POST"])
# def get_image():
#     data = request.json
#     text = data.get("text")

#     if not text:
#         return jsonify({"error": "No text provided"}), 400

#     # Check local cache
#     cached_image = get_cached_image(text)
#     if cached_image:
#         return jsonify({"image": cached_image, "source": "cache"})

#     # Generate new image
#     try:
#         generated_image = 'image_cache/loading.gif'
#         with open(generated_image, "rb") as f:
#             return base64.b64encode(f.read()).decode()
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

@app.route("/get_image", methods=["POST"])
def get_image():
    data = request.json
    text = data.get("text")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    # Check local cache
    cached_image = get_cached_image(text)
    if cached_image:
        return jsonify({"image": cached_image, "source": "cache"})

    # Generate new image
    try:
        # Highlighted change starts here
        with open('image_cache/loading.gif', "rb") as f:
            loading_gif = base64.b64encode(f.read()).decode()
        return jsonify({"image": loading_gif, "source": "generated"})
        # Highlighted change ends here
    except Exception as e:
        return jsonify({"error": str(e)}), 500





@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(debug=True, port=5000)


      # save_to_cache(text, generated_image)
        # return jsonify({"image": generated_image, "source": "api"})
                # generated_image = Amplify.API.post("imageGenerationApi", "/generate", body={"text": text})["image"]


                # Mock Amplify for local testing
# class MockAmplify:
#     class API:
#         @staticmethod
#         def post(api_name, path, body):
#             # Mock image generation
#             return {"image": generate_image(body["text"])}