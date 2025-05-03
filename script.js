<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>أداة اختراق إنستغرام</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #111;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: #222;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,255,0,0.3);
        }
        .logo {
            font-size: 48px;
            font-weight: bold;
            background: linear-gradient(to right, green, yellow);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 20px 0;
        }
        .panel {
            border: 1px solid #00ff00;
            border-radius: 5px;
            padding: 15px;
            margin: 20px 0;
            background-color: #1a1a1a;
        }
        input {
            padding: 10px;
            margin: 10px 0;
            width: 80%;
            background-color: #333;
            color: white;
            border: 1px solid #00ff00;
            border-radius: 5px;
        }
        button {
            padding: 10px 20px;
            background-color: #00aa00;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            margin: 10px 0;
        }
        button:hover {
            background-color: #00ff00;
        }
        .result {
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
        }
        .success {
            background-color: rgba(0, 255, 0, 0.2);
            color: #0f0;
        }
        .fail {
            background-color: rgba(255, 0, 0, 0.2);
            color: #f00;
        }
        .stars {
            color: #0f0;
            font-size: 24px;
            margin: 20px 0;
        }
        .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, #0f0, transparent);
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="panel">
            <div class="logo">Insta</div>
            <div class="stars">★أداة اختراق إنستغرام★</div>
            <div class="divider"></div>
            
            <input type="text" id="userId" placeholder="أدخل معرف التليجرام الخاص بك">
            <input type="text" id="token" placeholder="أدخل توكن البوت الخاص بك">
            <input type="text" id="target" placeholder="أدخل اسم المستخدم المستهدف">
            
            <button onclick="startHacking()">بدء الاختراق</button>
            
            <div id="results" class="panel">
                <h3>نتائج المحاولات:</h3>
                <div id="attempts"></div>
            </div>
        </div>
    </div>

    <script>
        // Check subscription date
        const currentDate = new Date();
        const expiryDate = new Date(2026, 2, 29); // March is 2 (0-indexed)
        
        if (currentDate >= expiryDate) {
            alert("انتهى وقت الاشتراك في الأداة، راسل المطور لتشغيلها: @J_imy1");
            document.body.innerHTML = '<div class="container"><div class="panel"><h1>انتهت صلاحية الأداة</h1><p>راسل المطور @J_imy1 لتجديد الاشتراك</p></div></div>';
        }

        function generateRandomPassword() {
            const lengths = [4, 5];
            const length = lengths[Math.floor(Math.random() * lengths.length)];
            const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#_)(+=×}{';
            let password = '';
            
            for (let i = 0; i < length; i++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            
            return password;
        }

        function getUserAgent() {
            const aa = 'Mozilla/5.0 (Linux; Android 10;';
            const b = ['7.0', '8.1.0', '9', '10', '11', '12'][Math.floor(Math.random() * 6)];
            const c = 'Infinix X688B';
            const d = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            const e = Math.floor(Math.random() * 999) + 1;
            const f = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            const g = 'AppleWebKit/537.36 (KHTML, like Gecko)';
            const h = Math.floor(Math.random() * 24) + 80;
            const i = '0';
            const j = Math.floor(Math.random() * 700) + 4200;
            const k = Math.floor(Math.random() * 110) + 40;
            const l = 'Chrome/107.0.0.0 Mobile Safari/537.36';
            
            return `${aa} ${b}; ${c}${d}${e}${f}) ${g}${h}.${i}.${j}.${k} ${l}`;
        }

        async function instaHack() {
            const userId = document.getElementById('userId').value;
            const token = document.getElementById('token').value;
            const target = document.getElementById('target').value;
            
            if (!userId || !token || !target) {
                alert("الرجاء ملء جميع الحقول!");
                return;
            }
            
            let hacked = false;
            let attempts = 0;
            const maxAttempts = 100; // Limit attempts for demo
            
            while (!hacked && attempts < maxAttempts) {
                attempts++;
                const password = generateRandomPassword();
                
                // Simulate delay
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // This is a simulation - in a real app you would make actual API calls
                // Note: Actually hacking Instagram is illegal and against their terms of service
                
                // Simulate success (10% chance for demo purposes)
                const success = Math.random() < 0.1;
                
                if (success) {
                    hacked = true;
                    const resultDiv = document.createElement('div');
                    resultDiv.className = 'result success';
                    resultDiv.textContent = `تم الاختراق بنجاح: ${target} | ${password}`;
                    document.getElementById('attempts').appendChild(resultDiv);
                    
                    // Simulate Telegram message
                    const ht = `
╔══════════════════════════════╗
║     ✨  أداة صيد إنستغرام  ✨     ║
╠══════════════════════════════╣
║  ‍ المطور: @J_imy1              ║
║  ‍ المطور: @J_imy1              ║
╠══════════════════════════════╣
• 𝑽𝑺𝑬𝑹𝑵𝑨𝑴𝑬 : ${target}        ║
║   • 𝑷𝑨𝑺𝑺𝑾𝑶𝑹 : ${password}    ║
╠══════════════════════════════╣
║ تم اختراق حساب إنستغرام بنجاح!║
╠══════════════════════════════╣
║     تهانينا! ❤️✨             ║
╚══════════════════════════════╝
                    `;
                    
                    console.log("Telegram message would be sent here:");
                    console.log(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${encodeURIComponent(ht)}`);
                    
                    alert("تم اختراق الحساب بنجاح! تحقق من التطبيق للحصول على التفاصيل.");
                } else {
                    const resultDiv = document.createElement('div');
                    resultDiv.className = 'result fail';
                    resultDiv.textContent = `فشل المحاولة: ${target} | ${password}`;
                    document.getElementById('attempts').appendChild(resultDiv);
                }
                
                // Scroll to bottom of results
                document.getElementById('attempts').scrollTop = document.getElementById('attempts').scrollHeight;
            }
            
            if (!hacked) {
                alert("انتهت المحاولات دون نجاح. حاول مرة أخرى أو راسل المطور @J_imy1");
            }
        }

        function startHacking() {
            document.getElementById('attempts').innerHTML = '';
            instaHack();
        }
    </script>
</body>
</html>