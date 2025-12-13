import "./project.css";

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer";

export function MarketingAnalysis() {
    return (
        <div style={{backgroundColor: "white"}} className="marketinganalysis project">
            <Navbar />
            <h2 className="text-center" style={{color: "#90728F", marginTop: "125px", marginLeft: "50px", marginRight: "50px"}}>
                SQL Case Study: Analyzing Marketing Data for an E-Commerce Company
            </h2>
            <div style={{backgroundColor: "#F5F1F4"}} className="d-flex justify-content-center">
                <img src="/img/marketingAnalysis/marketinganalysisPurple.png" className="header-image"></img>
            </div>

            <div className="content-container">
                <div className="d-flex flex-wrap gap-2">
                    <p className="tech-stack">SQL</p>
                    <p className="tech-stack">Tableau</p>
                </div>
                <p><strong>Dec 2025 - Dec 2025</strong></p>
                <p>
                    This project is an exploratory analysis on marketing and e-commerce data from a synthetic dataset. 
                    The data simulates an e-commerce company’s full analytics environment, including customers, products, 
                    marketing campaigns, user interaction events, and purchase transactions. 
                </p>

                <div className="content-group">
                    <h2 style={{color: "#90728F"}}>Business Problem</h2>
                    <h3>Context:</h3>
                    <p>
                        This project is an exploratory analysis on marketing and e-commerce data from a synthetic dataset. 
                        The data simulates an e-commerce company’s full analytics environment, including customers, products, 
                        marketing campaigns, user interaction events, and purchase transactions. Full dataset can be found on 
                        Kaggle (← include link)
                    </p>
                    <h3>Goal for Analysis:</h3>
                    <p>
                        The objective of this project is to evaluate how different campaigns contribute to conversions and 
                        custosmer retention. Results will help the company optimize campaign budgets and improve ROI.
                    </p>
                </div>

                <div className="content-group">
                <h2 style={{color: "#90728F"}}>Dataset</h2>
                    <h3>Data Cleaning</h3>
                    <p>
                        During the initial exploration of the transactions table, I identified rows with null values in the 
                        product_id and gross_revenue columns. After checking the count of null values in each, it appears 
                        that all null gross_revenue values occur when product_id is also null, confirming that missing revenue 
                        is tied to missing products.
                    </p>

                    <h4>Possible explanation:</h4>
                    <ol>
                        <li><strong>Deleted or missing product reference</strong></li>
                        <p>
                            The product may not be sold anymore and has been deleted in the products table, but the transaction 
                            was not updated
                        </p>
                        <li><strong>Revenue is dependent on product_id</strong></li>
                        <p>
                            Revenue can only be calculated if there is an associated product_id as the base_price is only included 
                            in the product table
                        </p>
                    </ol>
                    <h4>Conclusion:</h4>
                    <p>
                        I chose to include these rows to account for all transactions and ensure completeness of the dataset. 
                        I handled the missing data by filling them in with default values. Null values in product_id and 
                        gross_revenue are now shown as 0.
                    </p>
                </div>

                <div className="content-group">
                    <h2 style={{color: "#90728F"}}>ERD</h2>
                    <h3>Entities</h3>
                    <p><strong>Campaigns</strong></p>
                    <ul className="list">
                        <li>Contains information about each marketing campaign</li>
                        <li>Primary key campaign_id links to events and transactions</li>
                    </ul>
                    <p><strong>Customers</strong></p>
                    <ul className="list">
                        <li>Contains 1 row per customer with demographic and loyalty information</li>
                        <li>Primary key customer_id links to events and transactions</li>
                    </ul>
                    <p><strong>Events</strong></p>
                    <ul className="list">
                        <li>Contains information about user interactions (clicks, views, add-to-cart, purchases)</li>
                        <li>Primary key event_id, with foreign keys to customers, campaigns, and products</li>
                    </ul>
                    <p><strong>Products</strong></p>
                    <ul className="list">
                        <li>Contains information about each product in the catalog</li>
                        <li>Primary key product_id links to events and transactions</li>
                    </ul>
                    <p><strong>Transactions</strong></p>
                    <ul className="list">
                        <li>Contains information about purchase transactions</li>
                        <li>Primary key transaction_id, with foreign keys to customers, products, and campaigns</li>
                    </ul>
                    <img src="/img/marketingAnalysis/ERD.png" width={"100%"} className="pt-5"></img>
                </div>

                <div className="content-group">
                    <h2 style={{color: "#90728F"}}>Exploratory Analysis</h2>
                    <img src="/img/marketingAnalysis/visualization.png" width={"100%"} className="pt-3"></img>
                    <h3>Guiding Questions</h3>
                    <ol>
                        <li>Total revenue generated per campaign</li>
                        <li>Which campaigns drive the highest conversion rate?</li>
                        <ul className="list">
                            <li>How many people made purchases out of all who were exposed?</li>
                        </ul>
                        <li>Average order value per campaign</li>
                        <li>Revenue per acquisition channel</li>
                        <li>Repeat customers per acquisition channel</li>
                        <li>Which campaigns drive the highest % of returning customers?</li>
                        <ul className="list">
                            <li>For each campaign, what % of purchasers made another transaction within 60 days?</li>
                        </ul>
                        <li>How much revenue is generated by each age group per campaign?</li>
                        <li>Which campaigns underperform relative to expected uplift?</li>
                        <ul className="list">
                            <li>Compare expected_uplift vs actual conversions per campaign.</li>
                        </ul>
                        <li>What is the dropoff rate between each stage of the user journey?</li>
                        <ul>
                            <li>Stage Order: view → click → add_to_cart → purchase</li>
                        </ul>
                    </ol>

                    <button onClick={() => window.open("https://github.com/achan124/SQL-Marketing-Case-Study", "_blank")} className="checkout-link mt-5 me-3 project-button">Github</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
