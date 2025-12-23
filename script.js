// (এই অংশটি উপরে ১.৩-এ দেওয়া আছে, তাই আলাদা করে যোগ করার দরকার নেই)
    
    document.querySelector('.footer-back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // মসৃণ স্ক্রলিং এর জন্য
        });
    });