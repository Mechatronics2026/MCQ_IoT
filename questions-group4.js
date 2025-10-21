// مجموعة أسئلة
var quizData = [
    { 
        question_en: "Which of the following is more powerful?", 
        question_ar: "أي مما يلي أكثر قوة؟", 
        options: [
            { text_en: "Raspberry pi 2 model", text_ar: "رازبيري باي 2 موديل" }, 
            { text_en: "Raspberry pi model", text_ar: "رازبيري باي موديل" }, 
            { text_en: "Galileo gen 2 board", text_ar: "لوحة جاليليو الجيل الثاني" }, 
            { text_en: "Raspberry pi 3 model", text_ar: "رازبيري باي 3 موديل" }
        ], 
        correctAnswer: "D",
        explanation_en: "Raspberry Pi 3 model is more powerful with improved processor, more RAM, and built-in WiFi and Bluetooth capabilities compared to older models.",
        explanation_ar: "رازبيري باي 3 موديل أكثر قوة مع معالج محسن وذاكرة وصول عشوائي أكبر وإمكانيات واي فاي وبلوتوث مدمجة مقارنة بالنماذج الأقدم."
    },
    { 
        question_en: "______ is responsible for the integration of LoWPAN devices with internet leveraging.", 
        question_ar: "______ مسؤول عن تكامل أجهزة LoWPAN مع الاستفادة من الإنترنت.", 
        options: [
            { text_en: "left nfc", text_ar: "left nfc" }, 
            { text_en: "left бlowpan", text_ar: "left бlowpan" }, 
            { text_en: "left/nfc", text_ar: "left/nfc" }, 
            { text_en: "rfid/nfc", text_ar: "rfid/nfc" }
        ], 
        correctAnswer: "B",
        explanation_en: "6LoWPAN (IPv6 over Low-Power Wireless Personal Area Networks) is responsible for integrating LoWPAN devices with the internet.",
        explanation_ar: "6LoWPAN (IPv6 over Low-Power Wireless Personal Area Networks) مسؤول عن تكامل أجهزة LoWPAN مع الإنترنت."
    },
    { 
        question_en: "______ is responsible for saving the arguments received in three attributes", 
        question_ar: "______ مسؤول عن حفظ الوسائط المستلمة في ثلاثة سمات", 
        options: [
            { text_en: "_init_", text_ar: "_init_" }, 
            { text_en: "init_", text_ar: "init_" }, 
            { text_en: "_init_", text_ar: "_init_" }, 
            { text_en: "(init)", text_ar: "(init)" }
        ], 
        correctAnswer: "A",
        explanation_en: "The __init__ method in Python classes is responsible for initializing objects and saving received arguments as attributes.",
        explanation_ar: "طريقة __init__ في فئات بايثون مسؤولة عن تهيئة الكائنات وحفظ الوسائط المستلمة كسمات."
    },
    { 
        question_en: "Which of the following is the core wrapper of GSN?", 
        question_ar: "أي مما يلي هو الغلاف الأساسي لـ GSN؟", 
        options: [
            { text_en: "UDP", text_ar: "UDP" }, 
            { text_en: "UTP", text_ar: "UTP" }, 
            { text_en: "ZeroMQWrapper", text_ar: "ZeroMQWrapper" }, 
            { text_en: "GPS", text_ar: "GPS" }
        ], 
        correctAnswer: "C",
        explanation_en: "ZeroMQWrapper is the core wrapper in GSN (Global Sensor Networks) for handling message queuing and communication.",
        explanation_ar: "ZeroMQWrapper هو الغلاف الأساسي في GSN (شبكات الاستشعار العالمية) لمعالجة قائمة انتظار الرسائل والاتصال."
    },
    { 
        question_en: "Not only does API architecture include critical elements but also involve multiple ______", 
        question_ar: "لا تتضمن بنية واجهة برمجة التطبيقات العناصر الحرجة فقط ولكنها تشمل أيضًا عدة ______", 
        options: [
            { text_en: "Devices", text_ar: "أجهزة" }, 
            { text_en: "Network", text_ar: "شبكة" }, 
            { text_en: "System", text_ar: "نظام" }, 
            { text_en: "Multi-homing", text_ar: "المنازل المتعددة" }
        ], 
        correctAnswer: "D",
        explanation_en: "API architecture in IoT involves multi-homing to ensure connectivity through multiple network interfaces for reliability.",
        explanation_ar: "تشمل بنية واجهة برمجة التطبيقات في إنترنت الأشياء المنازل المتعددة لضمان الاتصال عبر واجهات شبكة متعددة للموثوقية."
    },
    { 
        question_en: "What type of technology is IoT based on?", 
        question_ar: "ما نوع التكنولوجيا التي يعتمد عليها إنترنت الأشياء؟", 
        options: [
            { text_en: "Hardware", text_ar: "الأجهزة" }, 
            { text_en: "Software", text_ar: "البرمجيات" }, 
            { text_en: "Firmware", text_ar: "البرامج الثابتة" }, 
            { text_en: "Both A and B", text_ar: "كل من أ و ب" }
        ], 
        correctAnswer: "D",
        explanation_en: "IoT is based on both hardware (sensors, devices) and software (applications, platforms) technologies working together.",
        explanation_ar: "يعتمد إنترنت الأشياء على كل من تكنولوجيا الأجهزة (أجهزة الاستشعار، الأجهزة) والبرمجيات (التطبيقات، المنصات) التي تعمل معًا."
    },
    { 
        question_en: "What is the extension of the JAVA file in IoT?", 
        question_ar: "ما هو امتداد ملف الجافا في إنترنت الأشياء؟", 
        options: [
            { text_en: ".exe", text_ar: ".exe" }, 
            { text_en: ".cps", text_ar: ".cps" }, 
            { text_en: ".jar", text_ar: ".jar" }, 
            { text_en: ".docx", text_ar: ".docx" }
        ], 
        correctAnswer: "C",
        explanation_en: ".jar is the standard extension for Java Archive files used in IoT applications for packaging classes and libraries.",
        explanation_ar: ".jar هو الامتداد القياسي لملفات أرشيف الجافا المستخدمة في تطبيقات إنترنت الأشياء لتغليف الفئات والمكتبات."
    },
    { 
        question_en: "SPI protocol consists of ______ signals.", 
        question_ar: "بروتوكول SPI يتكون من ______ إشارات.", 
        options: [
            { text_en: "4", text_ar: "4" }, 
            { text_en: "5", text_ar: "5" }, 
            { text_en: "7", text_ar: "7" }, 
            { text_en: "9", text_ar: "9" }
        ], 
        correctAnswer: "B",
        explanation_en: "SPI (Serial Peripheral Interface) protocol typically uses 5 signals: SCLK, MOSI, MISO, SS, and GND.",
        explanation_ar: "بروتوكول SPI (واجهة الطرفي التسلسلي) يستخدم عادة 5 إشارات: SCLK, MOSI, MISO, SS, و GND."
    },
    { 
        question_en: "The range of z-wave is ______", 
        question_ar: "نطاق زد-ويف هو ______", 
        options: [
            { text_en: "10 to 70 m", text_ar: "10 إلى 70 م" }, 
            { text_en: "30 to 100 m", text_ar: "30 إلى 100 م" }, 
            { text_en: "Less than 10 m", text_ar: "أقل من 10 م" }, 
            { text_en: "100 to 1000 M", text_ar: "100 إلى 1000 م" }
        ], 
        correctAnswer: "B",
        explanation_en: "Z-Wave typically has a range of 30 to 100 meters in open space, depending on environmental conditions.",
        explanation_ar: "يتراوح نطاق زد-ويف عادة من 30 إلى 100 متر في المساحة المفتوحة، depending on environmental conditions."
    },
    { 
        question_en: "GSN works on ______ programming languages.", 
        question_ar: "يعمل GSN على ______ لغات البرمجة.", 
        options: [
            { text_en: "JAVA", text_ar: "جافا" }, 
            { text_en: "C++", text_ar: "سي بلاس بلاس" }, 
            { text_en: "Python", text_ar: "بايثون" }, 
            { text_en: "BASIC", text_ar: "بيسك" }
        ], 
        correctAnswer: "A",
        explanation_en: "GSN (Global Sensor Networks) is primarily implemented using Java programming language.",
        explanation_ar: "يتم تنفيذ GSN (شبكات الاستشعار العالمية) primarily using Java programming language."
    },
    { 
        question_en: "Which of the following are communication protocols for IoT?", 
        question_ar: "أي من البروتوكولات التالية هي بروتوكولات اتصال لإنترنت الأشياء؟", 
        options: [
            { text_en: "Z-Wave", text_ar: "زد-ويف" }, 
            { text_en: "Zigbee", text_ar: "زيجبي" }, 
            { text_en: "Both A and B are correct", text_ar: "كل من أ و ب صحيح" }, 
            { text_en: "None of the above", text_ar: "لا شيء مما سبق" }
        ], 
        correctAnswer: "C",
        explanation_en: "Both Z-Wave and Zigbee are wireless communication protocols specifically designed for IoT applications.",
        explanation_ar: "كل من زد-ويف وزيجبي هما بروتوكولا اتصال لاسلكي مصممان خصيصًا لتطبيقات إنترنت الأشياء."
    },
    { 
        question_en: "client() class is provided to create ______", 
        question_ar: "يتم توفير فئة client() لإنشاء ______", 
        options: [
            { text_en: "Data", text_ar: "بيانات" }, 
            { text_en: "Batch", text_ar: "دفعة" }, 
            { text_en: "Hardware", text_ar: "أجهزة" }, 
            { text_en: "Methods", text_ar: "طرق" }
        ], 
        correctAnswer: "D",
        explanation_en: "The client() class in IoT frameworks is typically used to create methods for communication and data handling.",
        explanation_ar: "تُستخدم فئة client() في أطر عمل إنترنت الأشياء typically used to create methods for communication and data handling."
    },
    { 
        question_en: "______ network is used by a sensor", 
        question_ar: "______ الشبكة التي يستخدمها جهاز الاستشعار", 
        options: [
            { text_en: "han and lan", text_ar: "han و lan" }, 
            { text_en: "lan and pan", text_ar: "lan و pan" }, 
            { text_en: "Han and pan", text_ar: "Han و pan" }, 
            { text_en: "lan, han, pan", text_ar: "lan, han, pan" }
        ], 
        correctAnswer: "D",
        explanation_en: "Sensors in IoT can use various network types including LAN (Local Area Network), HAN (Home Area Network), and PAN (Personal Area Network).",
        explanation_ar: "يمكن لأجهزة الاستشعار في إنترنت الأشياء استخدام أنواع شبكات مختلفة بما في ذلك LAN (شبكة المنطقة المحلية) وHAN (شبكة منطقة المنزل) وPAN (شبكة المنطقة الشخصية)."
    },
    { 
        question_en: "HART full form is:", 
        question_ar: "النموذج الكامل لـ HART هو:", 
        options: [
            { text_en: "High Addressable Reduce Transport", text_ar: "النقل المخفض عالي العنوان" }, 
            { text_en: "Highway Addressable Remote Transducer", text_ar: "المحول البعيد عالي العنوان" }, 
            { text_en: "Highway Application Remote Transport", text_ar: "النقل البعيد لتطبيق الطريق السريع" }, 
            { text_en: "Hard Application Remote Transducer", text_ar: "المحول البعيد للتطبيق الصعب" }
        ], 
        correctAnswer: "B",
        explanation_en: "HART stands for Highway Addressable Remote Transducer, a communication protocol used in industrial automation.",
        explanation_ar: "HART تعني Highway Addressable Remote Transducer، وهو بروتوكول اتصال يستخدم في الأتمتة الصناعية."
    },
    { 
        question_en: "Which layer helps in end-to-end communication of IoT?", 
        question_ar: "أي طبقة تساعد في الاتصال من طرف إلى طرف في إنترنت الأشياء؟", 
        options: [
            { text_en: "Data security", text_ar: "أمان البيانات" }, 
            { text_en: "Logical", text_ar: "منطقي" }, 
            { text_en: "Transport", text_ar: "النقل" }, 
            { text_en: "None of the above", text_ar: "لا شيء مما سبق" }
        ], 
        correctAnswer: "C",
        explanation_en: "The Transport layer in IoT architecture is responsible for end-to-end communication and data transfer between devices.",
        explanation_ar: "طبقة النقل في بنية إنترنت الأشياء مسؤولة عن الاتصال من طرف إلى طرف ونقل البيانات بين الأجهزة."
    },
    { 
        question_en: "Which of the following is the security mechanism in WiFi?", 
        question_ar: "أي مما يلي هو آلية الأمان في الواي فاي؟", 
        options: [
            { text_en: "HTTP", text_ar: "HTTP" }, 
            { text_en: "DOCX", text_ar: "DOCX" }, 
            { text_en: "PDF", text_ar: "PDF" }, 
            { text_en: "WPA", text_ar: "WPA" }
        ], 
        correctAnswer: "D",
        explanation_en: "WPA (Wi-Fi Protected Access) is the security mechanism used in WiFi networks to encrypt and secure wireless communications.",
        explanation_ar: "WPA (الوصول المحمي بالواي فاي) هو آلية الأمان المستخدمة في شبكات الواي فاي لتشفير وتأمين الاتصالات اللاسلكية."
    },
    { 
        question_en: "IoT uses ______", 
        question_ar: "يستخدم إنترنت الأشياء ______", 
        options: [
            { text_en: "Satellite", text_ar: "الأقمار الصناعية" }, 
            { text_en: "Cable", text_ar: "الكابلات" }, 
            { text_en: "Radio identification technology", text_ar: "تكنولوجيا التعريف بالراديو" }, 
            { text_en: "Broadband", text_ar: "النطاق العريض" }
        ], 
        correctAnswer: "C",
        explanation_en: "IoT primarily uses radio identification technologies like RFID, NFC, and other wireless communication methods for device connectivity.",
        explanation_ar: "يستخدم إنترنت الأشياء primarily تكنولوجيات التعريف بالراديو مثل RFID وNFC وطرق الاتصال اللاسلكي الأخرى لتوصيل الأجهزة."
    },
    { 
        question_en: "______ is a type of google.com", 
        question_ar: "______ هو نوع من google.com", 
        options: [
            { text_en: "TCP", text_ar: "TCP" }, 
            { text_en: "UDP", text_ar: "UDP" }, 
            { text_en: "UTP", text_ar: "UTP" }, 
            { text_en: "DNS", text_ar: "DNS" }
        ], 
        correctAnswer: "D",
        explanation_en: "DNS (Domain Name System) is used to resolve domain names like google.com to IP addresses for internet communication.",
        explanation_ar: "يستخدم DNS (نظام اسم النطاق) لحل أسماء النطاقات مثل google.com إلى عناوين IP للاتصال بالإنترنت."
    },
    { 
        question_en: "What is the standard length of a MAC address?", 
        question_ar: "ما هو الطول القياسي لعنوان MAC؟", 
        options: [
            { text_en: "16 bits", text_ar: "16 بت" }, 
            { text_en: "8 bits", text_ar: "8 بت" }, 
            { text_en: "32 bits", text_ar: "32 بت" }, 
            { text_en: "48 bits", text_ar: "48 بت" }
        ], 
        correctAnswer: "D",
        explanation_en: "The standard MAC address length is 48 bits, typically represented as 12 hexadecimal characters (6 bytes).",
        explanation_ar: "الطول القياسي لعنوان MAC هو 48 بت، typically represented as 12 hexadecimal characters (6 bytes)."
    },
    { 
        question_en: "The core element operates", 
        question_ar: "يعمل العنصر الأساسي", 
        options: [
            { text_en: "PaaS", text_ar: "PaaS" }, 
            { text_en: "SaaS", text_ar: "SaaS" }, 
            { text_en: "IoT service provider", text_ar: "مزود خدمة إنترنت الأشياء" }, 
            { text_en: "SNP", text_ar: "SNP" }
        ], 
        correctAnswer: "C",
        explanation_en: "The core element of IoT systems is typically operated by IoT service providers who manage the infrastructure and services.",
        explanation_ar: "عادة ما يتم تشغيل العنصر الأساسي لأنظمة إنترنت الأشياء بواسطة موفري خدمات إنترنت الأشياء who manage the infrastructure and services."
    },
    { 
        question_en: "What is the maximum speed of Z-Wave?", 
        question_ar: "ما هي السرعة القصوى لـ Z-Wave؟", 
        options: [
            { text_en: "50 kbps", text_ar: "50 كيلوبت في الثانية" }, 
            { text_en: "100 kbps", text_ar: "100 كيلوبت في الثانية" }, 
            { text_en: "500 kbps", text_ar: "500 كيلوبت في الثانية" }, 
            { text_en: "150 Mbps", text_ar: "150 ميجابت في الثانية" }
        ], 
        correctAnswer: "B",
        explanation_en: "Z-Wave has a maximum data transfer speed of 100 kbps, suitable for low-power IoT applications.",
        explanation_ar: "يحتوي Z-Wave على سرعة نقل بيانات قصوى تبلغ 100 كيلوبت في الثانية، suitable for low-power IoT applications."
    },
    { 
        question_en: "______ many addresses are possible in IPv4", 
        question_ar: "______ العديد من العناوين ممكنة في IPv4", 
        options: [
            { text_en: "2^64", text_ar: "2^64" }, 
            { text_en: "2^16", text_ar: "2^16" }, 
            { text_en: "2^32", text_ar: "2^32" }, 
            { text_en: "2^20", text_ar: "2^20" }
        ], 
        correctAnswer: "C",
        explanation_en: "IPv4 uses 32-bit addresses, allowing for approximately 2^32 (4.3 billion) possible unique addresses.",
        explanation_ar: "يستخدم IPv4 عناوين 32 بت، allowing for approximately 2^32 (4.3 billion) possible unique addresses."
    },
    { 
        question_en: "LPWAN stands for:", 
        question_ar: "LPWAN تعني:", 
        options: [
            { text_en: "Lower Power Width Area Network", text_ar: "شبكة منطقة العرض ذات الطاقة المنخفضة" }, 
            { text_en: "Lower Protocol of Wide Area Network", text_ar: "البروتوكول الأدنى للشبكة الواسعة" }, 
            { text_en: "Low Power Wide Area Network", text_ar: "شبكة المنطقة الواسعة منخفضة الطاقة" }, 
            { text_en: "None of the above", text_ar: "لا شيء مما سبق" }
        ], 
        correctAnswer: "C",
        explanation_en: "LPWAN stands for Low Power Wide Area Network, designed for long-range communications with low power consumption.",
        explanation_ar: "LPWAN تعني Low Power Wide Area Network، مصممة للاتصالات طويلة المدى باستهلاك منخفض للطاقة."
    },
    { 
        question_en: "______ is a short-range wireless network", 
        question_ar: "______ هي شبكة لاسلكية قصيرة المدى", 
        options: [
            { text_en: "Hotspot", text_ar: "النقطة الساخنة" }, 
            { text_en: "Bluetooth", text_ar: "البلوتوث" }, 
            { text_en: "Wifi", text_ar: "الواي فاي" }, 
            { text_en: "VPN", text_ar: "VPN" }
        ], 
        correctAnswer: "B",
        explanation_en: "Bluetooth is a short-range wireless technology typically used for distances up to 10 meters.",
        explanation_ar: "البلوتوث هو تكنولوجيا لاسلكية قصيرة المدى typically used for distances up to 10 meters."
    },
    { 
        question_en: "What is I2C also called?", 
        question_ar: "ما الذي يسمى أيضًا I2C؟", 
        options: [
            { text_en: "One wire interface", text_ar: "واجهة السلك الواحد" }, 
            { text_en: "Two-wire interface", text_ar: "واجهة السلكين" }, 
            { text_en: "Both of the above", text_ar: "كل ما سبق" }, 
            { text_en: "None of the above", text_ar: "لا شيء مما سبق" }
        ], 
        correctAnswer: "B",
        explanation_en: "I2C is commonly called the Two-wire interface because it uses two wires for communication: SDA (data) and SCL (clock).",
        explanation_ar: "يسمى I2C commonly واجهة السلكين لأنه يستخدم سلكين للاتصال: SDA (البيانات) وSCL (الساعة)."
    },
    { 
        question_en: "______ community works together to establish an IoT architecture.", 
        question_ar: "______ المجتمع يعمل معًا لإنشاء بنية إنترنت الأشياء.", 
        options: [
            { text_en: "bot 2 bot", text_ar: "بوت إلى بوت" }, 
            { text_en: "red hat", text_ar: "ريد هات" }, 
            { text_en: "eclipse lot", text_ar: "إكلبس لوت" }, 
            { text_en: "intercloud", text_ar: "إنتركلود" }
        ], 
        correctAnswer: "C",
        explanation_en: "Eclipse IoT is a community that collaborates on developing open-source IoT architecture and frameworks.",
        explanation_ar: "Eclipse IoT هو community that collaborates on developing open-source IoT architecture and frameworks."
    },
    { 
        question_en: "______ of data cannot be read by users.", 
        question_ar: "______ البيانات لا يمكن قراءتها من قبل المستخدمين.", 
        options: [
            { text_en: "Passwords", text_ar: "كلمات المرور" }, 
            { text_en: "Encryption", text_ar: "التشفير" }, 
            { text_en: "Passcode", text_ar: "رمز المرور" }, 
            { text_en: "Both A and C are correct", text_ar: "كل من أ و ج صحيح" }
        ], 
        correctAnswer: "B",
        explanation_en: "Encrypted data cannot be read by users without the proper decryption keys, ensuring data security and privacy.",
        explanation_ar: "لا يمكن قراءة البيانات المشفرة من قبل المستخدمين without the proper decryption keys، ensuring data security and privacy."
    },
    { 
        question_en: "ZigBee Smart Energy uses topology.", 
        question_ar: "يستخدم ZigBee Smart Energy طوبولوجيا.", 
        options: [
            { text_en: "Bus topology", text_ar: "طوبولوجيا الناقل" }, 
            { text_en: "Table topology", text_ar: "طوبولوجيا الجدول" }, 
            { text_en: "Circle topology", text_ar: "طوبولوجيا الدائرة" }, 
            { text_en: "Star topology", text_ar: "طوبولوجيا النجمة" }
        ], 
        correctAnswer: "D",
        explanation_en: "ZigBee Smart Energy typically uses star topology where devices communicate through a central coordinator.",
        explanation_ar: "يستخدم ZigBee Smart Energy typically طوبولوجيا النجمة where devices communicate through a central coordinator."
    },
    { 
        question_en: "Which of the following is not an IoT enabler?", 
        question_ar: "أي مما يلي ليس من معززات إنترنت الأشياء؟", 
        options: [
            { text_en: "RFID", text_ar: "RFID" }, 
            { text_en: "Nanotechnology", text_ar: "تكنولوجيا النانو" }, 
            { text_en: "HTTP", text_ar: "HTTP" }, 
            { text_en: "Sensors", text_ar: "أجهزة الاستشعار" }
        ], 
        correctAnswer: "C",
        explanation_en: "HTTP is a general web protocol, not specifically an IoT enabler. RFID, nanotechnology, and sensors are key IoT enabling technologies.",
        explanation_ar: "HTTP هو بروتوكول ويب عام، not specifically an IoT enabler. RFID, nanotechnology, and sensors are key IoT enabling technologies."
    },
    { 
        question_en: "Which of the following allows the control of electronic components?", 
        question_ar: "أي مما يلي يسمح بالتحكم في المكونات الإلكترونية؟", 
        options: [
            { text_en: "http", text_ar: "http" }, 
            { text_en: "mqtt", text_ar: "mqtt" }, 
            { text_en: "restful api", text_ar: "واجهة برمجة تطبيقات RESTful" }, 
            { text_en: "None of the above", text_ar: "لا شيء مما سبق" }
        ], 
        correctAnswer: "B",
        explanation_en: "MQTT (Message Queuing Telemetry Transport) is a lightweight protocol specifically designed for controlling IoT devices and electronic components.",
        explanation_ar: "MQTT (نقل قائمة انتظار رسائل القياس عن بعد) هو بروتوكول خفيف الوزن مصمم خصيصًا للتحكم في أجهزة إنترنت الأشياء والمكونات الإلكترونية."
    }
    // يمكنك إضافة المزيد من الأسئلة هنا
];