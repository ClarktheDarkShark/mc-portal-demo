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
                            "lastUpdated": "2025-01-15",
                            "overview": "Overview of Stock Market Data",
                            "dataQuality": "High",
                            "lineage": "Source: Various stock exchanges",
                            "connectionDetails": "API endpoint: /api/v1/stock-market-data"
                        },
                        {
                            "name": "Global Economic Indicators",
                            "description": "Reports on GDP, inflation, and other economic metrics from various countries.",
                            "link": "https://example.com/economic-indicators",
                            "image": "/images/economic-indicators.jpg",
                            "lastUpdated": "2025-01-10",
                            "overview": "Overview of Global Economic Indicators",
                            "dataQuality": "Medium",
                            "lineage": "Source: Various government agencies",
                            "connectionDetails": "API endpoint: /api/v1/economic-indicators"
                        },
                        {
                            "name": "Cryptocurrency Trends",
                            "description": "Data tracking cryptocurrency prices, volumes, and market capitalization.",
                            "link": "https://example.com/crypto-trends",
                            "image": "/images/crypto-trends.jpg",
                            "lastUpdated": "2025-01-12",
                            "overview": "Overview of Cryptocurrency Trends",
                            "dataQuality": "High",
                            "lineage": "Source: Various cryptocurrency exchanges",
                            "connectionDetails": "API endpoint: /api/v1/crypto-trends"
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
                            "lastUpdated": "2025-01-12",
                            "overview": "Overview of Clinical Trials Data",
                            "dataQuality": "High",
                            "lineage": "Source: Various clinical trial registries",
                            "connectionDetails": "API endpoint: /api/v1/clinical-trials"
                        },
                        {
                            "name": "Hospital Admissions",
                            "description": "Anonymized statistics on hospital admissions across different regions.",
                            "link": "https://example.com/hospital-admissions",
                            "image": "/images/hospital-admissions.jpg",
                            "lastUpdated": "2025-01-08",
                            "overview": "Overview of Hospital Admissions",
                            "dataQuality": "Medium",
                            "lineage": "Source: Various hospitals",
                            "connectionDetails": "API endpoint: /api/v1/hospital-admissions"
                        },
                        {
                            "name": "Medical Imaging Datasets",
                            "description": "A collection of imaging data including X-rays, MRIs, and CT scans for research purposes.",
                            "link": "https://example.com/medical-imaging",
                            "image": "/images/medical-imaging.jpg",
                            "lastUpdated": "2025-01-09",
                            "overview": "Overview of Medical Imaging Datasets",
                            "dataQuality": "High",
                            "lineage": "Source: Various medical institutions",
                            "connectionDetails": "API endpoint: /api/v1/medical-imaging"
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
                            "lastUpdated": "2025-01-14",
                            "overview": "Overview of Satellite Imagery",
                            "dataQuality": "High",
                            "lineage": "Source: Various satellite providers",
                            "connectionDetails": "API endpoint: /api/v1/satellite-imagery"
                        },
                        {
                            "name": "Urban Maps",
                            "description": "Detailed urban maps with street-level information for major metropolitan areas.",
                            "link": "https://example.com/urban-maps",
                            "image": "/images/urban-maps.jpg",
                            "lastUpdated": "2025-01-16",
                            "overview": "Overview of Urban Maps",
                            "dataQuality": "Medium",
                            "lineage": "Source: Various mapping agencies",
                            "connectionDetails": "API endpoint: /api/v1/urban-maps"
                        },
                        {
                            "name": "Topographic Data",
                            "description": "Elevation models and contour data for topographical studies.",
                            "link": "https://example.com/topographic-data",
                            "image": "/images/topographic-data.jpg",
                            "lastUpdated": "2025-01-11",
                            "overview": "Overview of Topographic Data",
                            "dataQuality": "High",
                            "lineage": "Source: Various topographic surveys",
                            "connectionDetails": "API endpoint: /api/v1/topographic-data"
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
                            "lastUpdated": "2025-01-17",
                            "overview": "Overview of Twitter Trends",
                            "dataQuality": "High",
                            "lineage": "Source: Twitter API",
                            "connectionDetails": "API endpoint: /api/v1/twitter-trends"
                        },
                        {
                            "name": "Facebook Engagement",
                            "description": "Metrics on content reach, likes, and shares across public pages.",
                            "link": "https://example.com/facebook-engagement",
                            "image": "/images/facebook-engagement.jpg",
                            "lastUpdated": "2025-01-13",
                            "overview": "Overview of Facebook Engagement",
                            "dataQuality": "Medium",
                            "lineage": "Source: Facebook API",
                            "connectionDetails": "API endpoint: /api/v1/facebook-engagement"
                        },
                        {
                            "name": "Instagram Insights",
                            "description": "Data on post performance, follower growth, and engagement statistics.",
                            "link": "https://example.com/instagram-insights",
                            "image": "/images/instagram-insights.jpg",
                            "lastUpdated": "2025-01-15",
                            "overview": "Overview of Instagram Insights",
                            "dataQuality": "High",
                            "lineage": "Source: Instagram API",
                            "connectionDetails": "API endpoint: /api/v1/instagram-insights"
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