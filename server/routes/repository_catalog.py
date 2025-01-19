from flask import Blueprint, jsonify

repository_catalog_bp = Blueprint("repository_catalog_bp", __name__)

@repository_catalog_bp.route("/ai", methods=["GET"])
def get_ai_catalog():
    ai_catalog = {
        "modelRepository": {
            "categories": [
                {
                    "name": "GenAI",
                    "models": [
                        {
                            "name": "GenAI Model A",
                            "link": "https://example.com/genai-a",
                            "description": "A cutting-edge GenAI model for creative content generation."
                        },
                        {
                            "name": "GenAI Model B",
                            "link": "https://example.com/genai-b",
                            "description": "A robust GenAI model for enterprise applications."
                        }
                    ]
                },
                {
                    "name": "Computer Vision",
                    "models": [
                        {
                            "name": "CV Model 1",
                            "link": "https://example.com/cv1",
                            "description": "A high-accuracy model for image recognition tasks."
                        },
                        {
                            "name": "CV Model 2",
                            "link": "https://example.com/cv2",
                            "description": "A state-of-the-art model for object detection."
                        }
                    ]
                },
                {
                    "name": "NLP",
                    "models": [
                        {
                            "name": "NLP Model 1",
                            "link": "https://example.com/nlp1",
                            "description": "An NLP model designed for sentiment analysis."
                        }
                    ]
                },
                {
                    "name": "Speech",
                    "models": [
                        {
                            "name": "Speech Model 1",
                            "link": "https://example.com/speech1",
                            "description": "A speech recognition model with high accuracy."
                        }
                    ]
                },
                {
                    "name": "Robotics",
                    "models": [
                        {
                            "name": "Robotics Model 1",
                            "link": "https://example.com/robotics1",
                            "description": "A robotics model for autonomous navigation."
                        }
                    ]
                },
                {
                    "name": "Time Series",
                    "models": [
                        {
                            "name": "Time Series Model 1",
                            "link": "https://example.com/timeseries1",
                            "description": "A model optimized for forecasting time series data."
                        }
                    ]
                }
            ]
        },
        "aiToolkits": {
            "name": "AI Toolkits",
            "link": "https://example.com/ai-toolkits",
            "description": "Toolkits designed for building and deploying AI solutions."
        }
    }
    return jsonify(ai_catalog)


@repository_catalog_bp.route("/data", methods=["GET"])
def get_data_catalog():
    data_catalog = {
        "dataRepository": {
            "categories": [
                {
                    "name": "Financial Data",
                    "description": "Datasets related to financial markets, economic indicators, and transactions.",
                    "datasets": [
                        {
                            "name": "Stock Market Data",
                            "description": "Historical and real-time data for major stock exchanges around the globe.",
                            "link": "https://example.com/stock-market-data",
                            "image": "/images/stock-market.jpg",
                            "lastUpdated": "2025-01-15"
                        },
                        {
                            "name": "Global Economic Indicators",
                            "description": "Reports on GDP, inflation, and other economic metrics from various countries.",
                            "link": "https://example.com/economic-indicators",
                            "image": "/images/economic-indicators.jpg",
                            "lastUpdated": "2025-01-10"
                        },
                        {
                            "name": "Cryptocurrency Trends",
                            "description": "Data tracking cryptocurrency prices, volumes, and market capitalization.",
                            "link": "https://example.com/crypto-trends",
                            "image": "/images/crypto-trends.jpg",
                            "lastUpdated": "2025-01-12"
                        }
                    ]
                },
                {
                    "name": "Healthcare Data",
                    "description": "Comprehensive datasets covering medical research, patient records (anonymized), and clinical trials.",
                    "datasets": [
                        {
                            "name": "Clinical Trials Data",
                            "description": "Global data on clinical trials for various treatments and medications.",
                            "link": "https://example.com/clinical-trials",
                            "image": "/images/clinical-trials.jpg",
                            "lastUpdated": "2025-01-12"
                        },
                        {
                            "name": "Hospital Admissions",
                            "description": "Anonymized statistics on hospital admissions across different regions.",
                            "link": "https://example.com/hospital-admissions",
                            "image": "/images/hospital-admissions.jpg",
                            "lastUpdated": "2025-01-08"
                        },
                        {
                            "name": "Medical Imaging Datasets",
                            "description": "A collection of imaging data including X-rays, MRIs, and CT scans for research purposes.",
                            "link": "https://example.com/medical-imaging",
                            "image": "/images/medical-imaging.jpg",
                            "lastUpdated": "2025-01-09"
                        }
                    ]
                },
                {
                    "name": "Geospatial Data",
                    "description": "High-resolution geospatial datasets, satellite imagery, and urban mapping resources.",
                    "datasets": [
                        {
                            "name": "Satellite Imagery",
                            "description": "Up-to-date satellite images for environmental monitoring and land-use analysis.",
                            "link": "https://example.com/satellite-imagery",
                            "image": "/images/satellite-imagery.jpg",
                            "lastUpdated": "2025-01-14"
                        },
                        {
                            "name": "Urban Maps",
                            "description": "Detailed urban maps with street-level information for major metropolitan areas.",
                            "link": "https://example.com/urban-maps",
                            "image": "/images/urban-maps.jpg",
                            "lastUpdated": "2025-01-16"
                        },
                        {
                            "name": "Topographic Data",
                            "description": "Elevation models and contour data for topographical studies.",
                            "link": "https://example.com/topographic-data",
                            "image": "/images/topographic-data.jpg",
                            "lastUpdated": "2025-01-11"
                        }
                    ]
                },
                {
                    "name": "Social Media Data",
                    "description": "Datasets covering social media trends, sentiment analysis, and user behavior metrics.",
                    "datasets": [
                        {
                            "name": "Twitter Trends",
                            "description": "Real-time tracking of trending topics, hashtags, and user engagement on Twitter.",
                            "link": "https://example.com/twitter-trends",
                            "image": "/images/twitter-trends.jpg",
                            "lastUpdated": "2025-01-17"
                        },
                        {
                            "name": "Facebook Engagement",
                            "description": "Metrics on content reach, likes, and shares across public pages.",
                            "link": "https://example.com/facebook-engagement",
                            "image": "/images/facebook-engagement.jpg",
                            "lastUpdated": "2025-01-13"
                        },
                        {
                            "name": "Instagram Insights",
                            "description": "Data on post performance, follower growth, and engagement statistics.",
                            "link": "https://example.com/instagram-insights",
                            "image": "/images/instagram-insights.jpg",
                            "lastUpdated": "2025-01-15"
                        }
                    ]
                }
            ]
        },
        "dataReports": {
            "name": "Data Analytics Reports",
            "description": "Detailed reports and visualizations providing actionable insights and trends across various sectors.",
            "link": "https://example.com/data-reports",
            "reports": [
                {
                    "title": "Q4 Financial Overview",
                    "summary": "Comprehensive analysis of financial performance in Q4, highlighting key market trends and forecasts.",
                    "link": "https://example.com/reports/q4-financial-overview",
                    "publishedDate": "2024-12-31"
                },
                {
                    "title": "Healthcare Innovations Report",
                    "summary": "Insights into the latest advancements and research trends in the healthcare sector.",
                    "link": "https://example.com/reports/healthcare-innovations",
                    "publishedDate": "2024-11-20"
                },
                {
                    "title": "Geospatial Insights",
                    "summary": "An analysis report on urban development and environmental changes using satellite data.",
                    "link": "https://example.com/reports/geospatial-insights",
                    "publishedDate": "2025-01-05"
                }
            ]
        },
        "dataAPIs": {
            "name": "Data Access APIs",
            "description": "RESTful APIs that provide programmatic access to live datasets and analytics.",
            "link": "https://example.com/data-apis",
            "endpoints": [
                {
                    "endpoint": "/api/v1/financial-data",
                    "description": "Retrieve financial market data, economic indicators, and trends."
                },
                {
                    "endpoint": "/api/v1/healthcare-data",
                    "description": "Access anonymized healthcare records, clinical trial data, and research findings."
                },
                {
                    "endpoint": "/api/v1/geospatial-data",
                    "description": "Fetch high-resolution satellite imagery, urban maps, and topographic data."
                },
                {
                    "endpoint": "/api/v1/social-media-data",
                    "description": "Get real-time social media trends, engagement metrics, and sentiment analysis."
                }
            ]
        }
    }

    return jsonify(data_catalog)