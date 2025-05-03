<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>أداة تخمين كلمات المرور المتقدمة</title>
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
            margin: 10px 5px;
        }
        button:hover {
            background-color: #00ff00;
        }
        #stopBtn {
            background-color: #aa0000;
        }
        #stopBtn:hover {
            background-color: #ff0000;
        }
        .result {
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            font-family: monospace;
        }
        .success {
            background-color: rgba(0, 255, 0, 0.2);
            color: #0f0;
            border: 1px solid #0f0;
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
        #passwordList {
            max-height: 300px;
            overflow-y: auto;
            margin: 20px 0;
            padding: 10px;
            background-color: #1a1a1a;
            border: 1px solid #333;
            border-radius: 5px;
            text-align: left;
        }
        .stats {
            display: flex;
            justify-content: space-around;
            margin: 15px 0;
            padding: 10px;
            background-color: #252525;
            border-radius: 5px;
        }
        .progress-bar {
            height: 20px;
            background-color: #333;
            border-radius: 10px;
            margin: 10px 0;
            overflow: hidden;
        }
        .progress {
            height: 100%;
            background: linear-gradient(to right, #00aa00, #00ff00);
            width: 0%;
            transition: width 0.3s;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="panel">
            <div class="logo">InstaCrack</div>
            <div class="stars">★ أداة متقدمة لتخمين كلمات المرور ★</div>
            <div class="divider"></div>
            
            <input type="text" id="target" placeholder="اسم المستخدم المستهدف">
            <div>
                <button onclick="startGuessing()">بدء التخمين</button>
                <button id="stopBtn" onclick="stopGuessing()">إيقاف</button>
            </div>
            
            <div class="progress-bar">
                <div class="progress" id="progressBar"></div>
            </div>
            
            <div class="stats">
                <div>المحاولات: <span id="attemptCount">0</span></div>
                <div>الناجحة: <span id="successCount">0</span></div>
                <div>الوقت: <span id="timeElapsed">0.00</span> ثانية</div>
            </div>
            
            <div id="passwordList"></div>
            
            <div id="results" class="panel">
                <h3>النتائج الناجحة:</h3>
                <div id="attempts"></div>
            </div>
        </div>
    </div>

    <script>
        let isRunning = false;
        let attempts = 0;
        let successCount = 0;
        let startTime;
        let interval;
        const MAX_ATTEMPTS = 5000; // زيادة الحد الأقصى إلى 5000
        const SUCCESS_RATE = 0.20; // زيادة نسبة النجاح إلى 20%
        
        const commonPasswords = [
            '123456', 'password', '123456789', '12345', '12345678',
            'qwerty', '1234567', '111111', '1234567890', '123123',
            'abc123', 'password1', '1234', 'iloveyou', 'admin',
            'instagram', 'insta2023', 'love123', 'admin123', '123456a'
        ];
        
        function updateStats() {
            document.getElementById('attemptCount').textContent = attempts;
            document.getElementById('successCount').textContent = successCount;
            
            const progressPercent = (attempts / MAX_ATTEMPTS) * 100;
            document.getElementById('progressBar').style.width = `${progressPercent}%`;
            
            if (isRunning) {
                const currentTime = new Date();
                const elapsed = (currentTime - startTime) / 1000;
                document.getElementById('timeElapsed').textContent = elapsed.toFixed(2);
            }
        }
        
        function generateSmartPassword() {
            // 40% فرصة استخدام كلمة شائعة
            if (Math.random() < 0.4 && commonPasswords.length > 0) {
                return commonPasswords[Math.floor(Math.random() * commonPasswords.length)];
            }
            
            const patterns = [
                () => { // نمط: حرف كبير + حروف صغيرة + أرقام
                    const chars = 'abcdefghijklmnopqrstuvwxyz';
                    let pass = chars.charAt(Math.floor(Math.random() * chars.length)).toUpperCase();
                    pass += chars.substr(Math.floor(Math.random() * 25), 3);
                    pass += Math.floor(Math.random() * 90 + 10);
                    return pass;
                },
                () => { // نمط: كلمة + رمز + أرقام
                    const words = ['love', 'pass', 'hello', 'insta', 'user', 'account', 'login'];
                    const symbols = '@#_)(+=×}{';
                    const word = words[Math.floor(Math.random() * words.length)];
                    const symbol = symbols.charAt(Math.floor(Math.random() * symbols.length));
                    return word + symbol + Math.floor(Math.random() * 100);
                },
                () => { // نمط: تاريخ ميلاد
                    const year = Math.floor(Math.random() * 30) + 1980;
                    const month = Math.floor(Math.random() * 12) + 1;
                    const day = Math.floor(Math.random() * 28) + 1;
                    return [day, month, year].join(''); // دمج التاريخ بدون فواصل
                },
                () => { // نمط: اسم + أرقام
                    const names = ['ali', 'mohamed', 'ahmed', 'sara', 'lina', 'youssef'];
                    const name = names[Math.floor(Math.random() * names.length)];
                    return name + Math.floor(Math.random() * 1000);
                }
            ];
            
            return patterns[Math.floor(Math.random() * patterns.length)]();
        }

        async function startGuessing() {
            const target = document.getElementById('target').value;
            
            if (!target) {
                alert("الرجاء إدخال اسم المستخدم!");
                return;
            }
            
            isRunning = true;
            attempts = 0;
            successCount = 0;
            startTime = new Date();
            document.getElementById('attempts').innerHTML = '';
            document.getElementById('passwordList').innerHTML = '<p>جاري بدء عملية التخمين...</p>';
            
            // تحديث الإحصائيات كل 100 مللي ثانية
            clearInterval(interval);
            interval = setInterval(updateStats, 100);
            
            while (isRunning && attempts < MAX_ATTEMPTS) {
                attempts++;
                const password = generateSmartPassword();
                
                // عرض كلمة المرور المولدة (كل 10 محاولات فقط لتحسين الأداء)
                if (attempts % 10 === 0 || attempts < 20) {
                    const passwordElement = document.createElement('div');
                    passwordElement.className = 'result';
                    passwordElement.textContent = `#${attempts}: ${password}`;
                    document.getElementById('passwordList').appendChild(passwordElement);
                }
                
                // محاكاة التأخير (أسرع الآن لزيادة عدد المحاولات)
                await new Promise(resolve => setTimeout(resolve, 50));
                
                // 20% فرصة "نجاح" عشوائي
                if (Math.random() < SUCCESS_RATE) {
                    successCount++;
                    const successElement = document.createElement('div');
                    successElement.className = 'result success';
                    successElement.textContent = `[نجاح #${successCount}] ${target} : ${password}`;
                    document.getElementById('attempts').appendChild(successElement);
                    
                    // إظهار نتيجة "النجاح" بتنسيق جميل
                    if (successCount === 1) {
                        const timeElapsed = ((new Date() - startTime) / 1000).toFixed(2);
                        const successMsg = `╔══════════════════════════════╗
║   ✓ تم العثور على كلمة مرور!   ║
╠══════════════════════════════╣
║ المستخدم: ${target}
║ كلمة المرور: ${password}
║ المحاولة: #${attempts}
║ الوقت: ${timeElapsed} ثانية
╚══════════════════════════════╝`;
                        
                        const successDisplay = document.createElement('pre');
                        successDisplay.className = 'result success';
                        successDisplay.textContent = successMsg;
                        document.getElementById('attempts').appendChild(successDisplay);
                    }
                }
                
                // التمرير التلقائي عند الحاجة
                if (attempts % 20 === 0) {
                    document.getElementById('passwordList').scrollTop = document.getElementById('passwordList').scrollHeight;
                    document.getElementById('attempts').scrollTop = document.getElementById('attempts').scrollHeight;
                }
            }
            
            stopGuessing();
            
            if (attempts >= MAX_ATTEMPTS) {
                alert(`تم الوصول إلى الحد الأقصى للمحاولات (${MAX_ATTEMPTS}) مع ${successCount} نتيجة ناجحة.`);
            }
        }
        
        function stopGuessing() {
            isRunning = false;
            clearInterval(interval);
            updateStats();
            
            const timeElapsed = ((new Date() - startTime) / 1000).toFixed(2);
            document.getElementById('passwordList').innerHTML += `
                <div class="result">
                    <strong>ملخص التنفيذ:</strong><br>
                    - عدد المحاولات: ${attempts}<br>
                    - النتائج الناجحة: ${successCount}<br>
                    - الوقت المستغرق: ${timeElapsed} ثانية<br>
                    - السرعة: ${(attempts/timeElapsed).toFixed(2)} محاولة/ثانية
                </div>
            `;
        }

        // عرض أمثلة لكلمات المرور عند تحميل الصفحة
        window.onload = function() {
            let examples = "<h4>أنماط كلمات المرور التي سيتم تجربتها:</h4>";
            for (let i = 0; i < 10; i++) {
                examples += `<div>${generateSmartPassword()}</div>`;
            }
            document.getElementById('passwordList').innerHTML = examples;
        };
    </script>
</body>
</html>6703506413
