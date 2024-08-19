import React from 'react';
import '../assets/styles/Community.css';
const AppAboutMe = () => {
    return (

        <div className="community">
            <h2 className="community-title">Behind the Scenes</h2>
            <div className="community-content">
                <img src="rezana.jpg" alt="Rezana" className="community-image"/>
                <p className="community-paragraph">
                    Hello friends, I'm Rezana, and cooking is a big part of who I am. For me, the kitchen is more than
                    just a place to prepare meals—it's a space where creativity and culture come alive.
                    <br/>
                    <br/>

                    Cooking is my love language. Through cooking, I've learned so much about different cultures and traditions, and I’m always eager to recreate a
                    dish that left a lasting impression on me. Whether it’s a classic recipe or something I’ve tasted
                    during my travels, I find joy in bringing these flavors back to life in my own kitchen.
                    <br/>
                    <br/>

                    I believe that our kitchens are a canvas for artistic expression. Every meal is an opportunity to
                    express who we are and to share that with the people we care about. Entertaining friends and family
                    is one of my greatest joys, and I love seeing how food brings everyone together.
                    <br/>
                    <br/>

                    Healthy eating is also a big part of my life. I truly believe that we can heal our bodies and live
                    happier, healthier lives by being mindful and eat with purpose.
                    <br/>
                    <br/>

                    In essence, my kitchen is my studio, where I blend my love for healthy living with my passion for
                    culinary artistry. I hope to inspire others to see the kitchen as a place of creativity, healing,
                    and connection.
                    <br/>

                </p>

            </div>
            <div id="instagram-feed">
                <script type="text/javascript" src="https://www.juicer.io/embed/rezzipeas/embed-code.js" async
                        defer></script>
            </div>

        </div>
    );
};

export default AppAboutMe;
