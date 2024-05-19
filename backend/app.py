from flask import Flask, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/deals')
def get_deals():
    deals = [
        {"store": "Amazon", "discount": "10% off", "image": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", "url": "https://www.amazon.com"},
        {"store": "eBay", "discount": "15% off", "image": "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg", "url": "https://www.ebay.com"},
        {"store": "Walmart", "discount": "20% off", "image": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg", "url": "https://www.walmart.com"},
        {"store": "Best Buy", "discount": "5% off", "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Best_Buy_Logo.svg", "url": "https://www.bestbuy.com"},
        {"store": "Target", "discount": "25% off", "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Target_logo.svg", "url": "https://www.target.com"},
        {"store": "Macy's", "discount": "30% off", "image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Macy%27s_logo.svg", "url": "https://www.macys.com"},
        {"store": "Costco", "discount": "10% off", "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Costco_Wholesale_logo.svg", "url": "https://www.costco.com"},
        {"store": "Home Depot", "discount": "15% off", "image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/TheHomeDepot.svg", "url": "https://www.homedepot.com"},
        {"store": "Lowe's", "discount": "20% off", "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Lowes_logo_pms_280.svg", "url": "https://www.lowes.com"},
        {"store": "Flipkart", "discount": "10% off", "image": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flipkart_logo.svg", "url": "https://www.flipkart.com"},
        {"store": "Alibaba", "discount": "15% off", "image": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Alibaba.com_logo.svg", "url": "https://www.alibaba.com"}
    ]
    return jsonify(deals)

if __name__ == "__main__":
    app.run(port=5000)
