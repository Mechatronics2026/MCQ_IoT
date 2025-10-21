// مجموعة أسئلة
var quizData = [
    { 
        question_en: "What is the full form of IANA?", 
        question_ar: "ما هو النموذج الكامل لـ IANA؟", 
        options: [
            { text_en: "Internal Assessment Numerical Access", text_ar: "الوصول الرقمي للتقييم الداخلي" }, 
            { text_en: "Internet Association Numbers Authority", text_ar: "هيئة أرقام جمعية الإنترنت" }, 
            { text_en: "International Aid For Network Automation", text_ar: "المساعدة الدولية لأتمتة الشبكات" }, 
            { text_en: "Internet Assigned Numbers Authority", text_ar: "هيئة أرقام الإنترنت المعينة" }
        ], 
        correctAnswer: "D",
        explanation_en: "IANA stands for Internet Assigned Numbers Authority, which manages IP addresses, domain names, and protocol parameters.",
        explanation_ar: "IANA تعني هيئة أرقام الإنترنت المعينة، التي تدير عناوين IP وأسماء النطاقات ومعلمات البروتوكول."
    },
    { 
        question_en: "IoT stands for:", 
        question_ar: "إنترنت الأشياء تعني:", 
        options: [
            { text_en: "Internet of Tech", text_ar: "إنترنت التكنولوجيا" }, 
            { text_en: "Incorporation of Things", text_ar: "دمج الأشياء" }, 
            { text_en: "Internet of Things", text_ar: "إنترنت الأشياء" }, 
            { text_en: "Incorporation of Technology", text_ar: "دمج التكنولوجيا" }
        ], 
        correctAnswer: "C",
        explanation_en: "IoT stands for Internet of Things, which refers to the network of physical objects embedded with sensors and connectivity.",
        explanation_ar: "إنترنت الأشياء تعني إنترنت الأشياء، والتي تشير إلى شبكة الأشياء المادية المضمنة بأجهزة استشعار واتصال."
    },
    { 
        question_en: "Which of the following can not be considered an IoT device?", 
        question_ar: "أي من الأجهزة التالية لا يمكن اعتباره جهاز إنترنت أشياء؟", 
        options: [
            { text_en: "Smartwatch", text_ar: "ساعة ذكية" }, 
            { text_en: "Android Phone", text_ar: "هاتف أندرويد" }, 
            { text_en: "Laptop", text_ar: "كمبيوتر محمول" }, 
            { text_en: "Tubelight", text_ar: "أنبوب ضوئي" }
        ], 
        correctAnswer: "D",
        explanation_en: "A regular tubelight without sensors or connectivity is not an IoT device, while smartwatches, phones, and laptops can be part of IoT systems.",
        explanation_ar: "الأنبوب الضوئي العادي بدون أجهزة استشعار أو اتصال ليس جهاز إنترنت أشياء، بينما يمكن أن تكون الساعات الذكية والهواتف وأجهزة الكمبيوتر المحمولة جزءًا من أنظمة إنترنت الأشياء."
    },
    { 
        question_en: "Which is not an IoT platform?", 
        question_ar: "أي من التالي ليس منصة إنترنت أشياء؟", 
        options: [
            { text_en: "Xiaomi Cloud", text_ar: "سحابة شاومي" }, 
            { text_en: "GoogleCloud", text_ar: "جوجل كلاود" }, 
            { text_en: "Myntra", text_ar: "ماينترا" }, 
            { text_en: "AWS(Amazon Web Services)", text_ar: "خدمات أمازون ويب" }
        ], 
        correctAnswer: "C",
        explanation_en: "AWS, Google Cloud, and Xiaomi Cloud deliver cloud computing IoT services. But Myntra is an e-commerce website that supplies goods.",
        explanation_ar: "توفر AWS وجوجل كلاود وسحابة شاومي خدمات الحوسبة السحابية لإنترنت الأشياء. لكن ماينترا هو موقع تجارة إلكترونية يوفر السلع."
    },
    { 
        question_en: "IoT is based on ______ technology.", 
        question_ar: "يعتمد إنترنت الأشياء على تقنية ______.", 
        options: [
            { text_en: "Hardware", text_ar: "الأجهزة" }, 
            { text_en: "Software", text_ar: "البرمجيات" }, 
            { text_en: "None", text_ar: "لا شيء" }, 
            { text_en: "Both of these", text_ar: "كلا هذين" }
        ], 
        correctAnswer: "D",
        explanation_en: "IoT relies on both hardware components like sensors and actuators, and software for data processing and connectivity.",
        explanation_ar: "يعتمد إنترنت الأشياء على مكونات الأجهزة مثل أجهزة الاستشعار والمشغلات، والبرمجيات لمعالجة البيانات والاتصال."
    },
    { 
        question_en: "What is the standard form of RFID?", 
        question_ar: "ما هو النموذج القياسي لـ RFID؟", 
        options: [
            { text_en: "Radio Frequency Identification", text_ar: "التعرف بتردد الراديو" }, 
            { text_en: "Radio Waves Frequency Identification", text_ar: "التعرف بتردد موجات الراديو" }, 
            { text_en: "Radio Frequency InterDependent", text_ar: "التردد اللاسلكي المترابط" }, 
            { text_en: "Radio Wave Frequency Independent", text_ar: "تردد موجات الراديو المستقل" }
        ], 
        correctAnswer: "A",
        explanation_en: "RFID stands for Radio Frequency Identification, a technology that uses radio waves to identify and track objects.",
        explanation_ar: "RFID تعني التعرف بتردد الراديو، وهي تقنية تستخدم موجات الراديو لتحديد وتتبع الأشياء."
    },
    { 
        question_en: "What is considered the standard length for a MAC Address?", 
        question_ar: "ما هو الطول القياسي لعنوان MAC؟", 
        options: [
            { text_en: "8 bits", text_ar: "8 بت" }, 
            { text_en: "32 bits", text_ar: "32 بت" }, 
            { text_en: "48 bits", text_ar: "48 بت" }, 
            { text_en: "None of these", text_ar: "لا شيء من هذه" }
        ], 
        correctAnswer: "C",
        explanation_en: "A standard MAC Address is 48 bits (6 bytes) long, typically represented as six groups of two hexadecimal digits.",
        explanation_ar: "عنوان MAC القياسي هو 48 بت (6 بايت) طويل، يتم تمثيله عادةً كست مجموعات من رقمين ست عشرية."
    },
    { 
        question_en: "What \"bit\" represents the address bit in the control register?", 
        question_ar: "أي \"بت\" يمثل بت العنوان في سجل التحكم؟", 
        options: [
            { text_en: "MML", text_ar: "MML" }, 
            { text_en: "ML", text_ar: "ML" }, 
            { text_en: "MX", text_ar: "MX" }, 
            { text_en: "MM", text_ar: "MM" }
        ], 
        correctAnswer: "C",
        explanation_en: "The MX bit in control registers typically represents the address bit used for memory addressing modes.",
        explanation_ar: "يمثل بت MX في سجلات التحكم عادةً بت العنوان المستخدم لأنظمة عنونة الذاكرة."
    },
    { 
        question_en: "What is mandatory for an IP Packet to contain?", 
        question_ar: "ما هو إلزامي أن يحتويه حزمة IP؟", 
        options: [
            { text_en: "Destination IP Address", text_ar: "عنوان IP الوجهة" }, 
            { text_en: "Source IP Address", text_ar: "عنوان IP المصدر" }, 
            { text_en: "Both of these", text_ar: "كلا هذين" }, 
            { text_en: "None of these", text_ar: "لا شيء من هذه" }
        ], 
        correctAnswer: "C",
        explanation_en: "Each IP Packet must contain both source and destination IP addresses for proper routing and delivery.",
        explanation_ar: "يجب أن تحتوي كل حزمة IP على كل من عناوين IP المصدر والوجهة للتوجيه والتسليم الصحيح."
    },
    { 
        question_en: "At which level does the router operate in the OSI reference model?", 
        question_ar: "في أي مستوى يعمل الموجه في نموذج OSI المرجعي؟", 
        options: [
            { text_en: "Data Link", text_ar: "ربط البيانات" }, 
            { text_en: "Network", text_ar: "الشبكة" }, 
            { text_en: "Physical", text_ar: "المادي" }, 
            { text_en: "None of these", text_ar: "لا شيء من هذه" }
        ], 
        correctAnswer: "B",
        explanation_en: "Routers operate at the Network layer (Layer 3) of the OSI model, handling IP packet routing between networks.",
        explanation_ar: "تعمل الموجهات في طبقة الشبكة (الطبقة 3) من نموذج OSI، handling توجيه حزم IP بين الشبكات."
    },
    { 
        question_en: "What is an IoT network?", 
        question_ar: "ما هي شبكة إنترنت الأشياء؟", 
        options: [
            { text_en: "a collection of networked devices", text_ar: "مجموعة من الأجهزة المتصلة بالشبكة" }, 
            { text_en: "a collection of interconnected devices", text_ar: "مجموعة من الأجهزة المترابطة" }, 
            { text_en: "a collection of signalled devices", text_ar: "مجموعة من الأجهزة المرسلة للإشارات" }, 
            { text_en: "None of the above", text_ar: "لا شيء من الأعلى" }
        ], 
        correctAnswer: "B",
        explanation_en: "An IoT network is a collection of interconnected devices that communicate and share data with each other.",
        explanation_ar: "شبكة إنترنت الأشياء هي مجموعة من الأجهزة المترابطة التي تتواصل وتشارك البيانات مع بعضها البعض."
    },
    { 
        question_en: "Full form of MQTT?", 
        question_ar: "النموذج الكامل لـ MQTT؟", 
        options: [
            { text_en: "Message Queue Telemetry Transport", text_ar: "نقل قياسات عن بعد لقائمة الانتظار" }, 
            { text_en: "Messanger Queue Telemetry Transport", text_ar: "نقل قياسات عن بعد لقائمة انتظار المراسل" }, 
            { text_en: "Message Queuery Telemetry Transport", text_ar: "نقل قياسات عن بعد لاستعلام الرسائل" }, 
            { text_en: "None of these", text_ar: "لا شيء من هذه" }
        ], 
        correctAnswer: "A",
        explanation_en: "MQTT stands for Message Queue Telemetry Transport, a lightweight messaging protocol for IoT devices.",
        explanation_ar: "MQTT تعني نقل قياسات عن بعد لقائمة الانتظار، وهو بروتوكول مراسلة خفيف الوزن لأجهزة إنترنت الأشياء."
    },
    { 
        question_en: "Full-Form of VNC:", 
        question_ar: "النموذج الكامل لـ VNC:", 
        options: [
            { text_en: "Virtual network of computers", text_ar: "شبكة افتراضية من أجهزة الكمبيوتر" }, 
            { text_en: "Very network of computers", text_ar: "شبكة كثيفة من أجهزة الكمبيوتر" }, 
            { text_en: "Virtual network for communication", text_ar: "شبكة افتراضية للاتصال" }, 
            { text_en: "Virtual network computing", text_ar: "حوسبة الشبكة الافتراضية" }
        ], 
        correctAnswer: "D",
        explanation_en: "VNC stands for Virtual Network Computing, a graphical desktop sharing system.",
        explanation_ar: "VNC تعني حوسبة الشبكة الافتراضية، وهو نظام مشاركة سطح مكتب رسومي."
    },
    { 
        question_en: "What is the java extension file used in IoT?", 
        question_ar: "ما هو امتداد ملف الجافا المستخدم في إنترنت الأشياء؟", 
        options: [
            { text_en: "jar", text_ar: "jar" }, 
            { text_en: "obj", text_ar: "obj" }, 
            { text_en: ".cpp", text_ar: ".cpp" }, 
            { text_en: ".exe", text_ar: ".exe" }
        ], 
        correctAnswer: "A",
        explanation_en: "JAR (Java Archive) files are commonly used in IoT applications for packaging Java classes and resources.",
        explanation_ar: "تُستخدم ملفات JAR (أرشيف الجافا) بشكل شائع في تطبيقات إنترنت الأشياء لتغليف فئات الجافا والموارد."
    },
    { 
        question_en: "Which one out of these is not a Data Link Layer Technology?", 
        question_ar: "أي من هذه ليست تقنية لطبقة ربط البيانات؟", 
        options: [
            { text_en: "Bluetooth", text_ar: "بلوتوث" }, 
            { text_en: "Wifi", text_ar: "واي فاي" }, 
            { text_en: "HTTP", text_ar: "HTTP" }, 
            { text_en: "Mobile Hotspot", text_ar: "نقطة اتصال محمولة" }
        ], 
        correctAnswer: "C",
        explanation_en: "HTTP is an Application Layer protocol, while Bluetooth, WiFi, and Mobile Hotspot operate at the Data Link Layer.",
        explanation_ar: "HTTP هو بروتوكول طبقة التطبيق، بينما تعمل البلوتوث والواي فاي ونقطة الاتصال المحمولة في طبقة ربط البيانات."
    },
    { 
        question_en: "What is the standard form of LLN?", 
        question_ar: "ما هو النموذج القياسي لـ LLN؟", 
        options: [
            { text_en: "Lower Lossy Network", text_ar: "شبكة فقدان أقل" }, 
            { text_en: "Low Power Lossy Network", text_ar: "شبكة منخفضة الطاقة وفقدان البيانات" }, 
            { text_en: "Lossy Low Power Network", text_ar: "شبكة فقدان البيانات ومنخفضة الطاقة" }, 
            { text_en: "Low Lossy Powered Network", text_ar: "شبكة مزودة بالطاقة منخفضة الفقدان" }
        ], 
        correctAnswer: "B",
        explanation_en: "LLN stands for Low Power Lossy Network, designed for IoT devices with limited power and bandwidth.",
        explanation_ar: "LLN تعني شبكة منخفضة الطاقة وفقدان البيانات، مصممة لأجهزة إنترنت الأشياء ذات الطاقة والعرض النطاقي المحدود."
    },
    { 
        question_en: "What type of interface is used by fingerprint sensors to collect data?", 
        question_ar: "أي نوع من الواجهات تستخدمها مستشعرات البصمة لجمع البيانات؟", 
        options: [
            { text_en: "IPI interface", text_ar: "واجهة IPI" }, 
            { text_en: "UART interface", text_ar: "واجهة UART" }, 
            { text_en: "I2P interface", text_ar: "واجهة I2P" }, 
            { text_en: "None", text_ar: "لا شيء" }
        ], 
        correctAnswer: "B",
        explanation_en: "Fingerprint sensors commonly use UART (Universal Asynchronous Receiver-Transmitter) interface for data communication.",
        explanation_ar: "تستخدم مستشعرات البصمة عادةً واجهة UART (جهاز الإرسال والاستقبال غير المتزامن العالمي) لاتصال البيانات."
    },
    { 
        question_en: "How many wires does the SPI protocol use?", 
        question_ar: "كم عدد الأسلاك التي يستخدمها بروتوكول SPI؟", 
        options: [
            { text_en: "3", text_ar: "3" }, 
            { text_en: "4", text_ar: "4" }, 
            { text_en: "2", text_ar: "2" }, 
            { text_en: "More than 4", text_ar: "أكثر من 4" }
        ], 
        correctAnswer: "B",
        explanation_en: "SPI (Serial Peripheral Interface) typically uses 4 wires: MOSI, MISO, SCLK, and CS.",
        explanation_ar: "يستخدم SPI (واجهة الطرفية التسلسلية) عادةً 4 أسلاك: MOSI وMISO وSCLK وCS."
    },
    { 
        question_en: "Which of the following things is mandatory for the IoT gateway to provide?", 
        question_ar: "أي من الأشياء التالية إلزامي أن توفره بوابة إنترنت الأشياء؟", 
        options: [
            { text_en: "Simple and secure installation", text_ar: "تثبيت بسيط وآمن" }, 
            { text_en: "Data network and storage", text_ar: "شبكة البيانات والتخزين" }, 
            { text_en: "Software Security", text_ar: "أمان البرمجيات" }, 
            { text_en: "Protocol abstraction", text_ar: "تجميع البروتوكولات" }
        ], 
        correctAnswer: "D",
        explanation_en: "An IoT gateway must provide protocol abstraction to handle different communication protocols between devices.",
        explanation_ar: "يجب أن توفر بوابة إنترنت الأشياء تجميع البروتوكولات للتعامل مع بروتوكولات الاتصال المختلفة بين الأجهزة."
    },
    { 
        question_en: "In which of the following way, data is associated with an IoT device:", 
        question_ar: "بأي من الطرق التالية ترتبط البيانات بجهاز إنترنت الأشياء:", 
        options: [
            { text_en: "Internet", text_ar: "الإنترنت" }, 
            { text_en: "Network connection", text_ar: "اتصال الشبكة" }, 
            { text_en: "Cables", text_ar: "الكابلات" }, 
            { text_en: "Cloud", text_ar: "السحابة" }
        ], 
        correctAnswer: "D",
        explanation_en: "IoT devices typically store and process data in the cloud for accessibility and scalability.",
        explanation_ar: "تخزن أجهزة إنترنت الأشياء وتعالج البيانات عادةً في السحابة لإمكانية الوصول والقابلية للتوسع."
    },
    { 
        question_en: "Full form of HART:", 
        question_ar: "النموذج الكامل لـ HART:", 
        options: [
            { text_en: "Highway Address Remote Transmitter", text_ar: "جهاز إرسال بعيد لعنوان الطريق السريع" }, 
            { text_en: "Highway Addressable Remote Transducer", text_ar: "محول بعيد قابل للعنونة للطريق السريع" }, 
            { text_en: "Highway Addressable Router Transmitter", text_ar: "جهاز إرسال موجه قابل للعنونة للطريق السريع" }, 
            { text_en: "Highway Address Remote Transmitter", text_ar: "جهاز إرسال بعيد لعنوان الطريق السريع" }
        ], 
        correctAnswer: "B",
        explanation_en: "HART stands for Highway Addressable Remote Transducer, a communication protocol for industrial automation.",
        explanation_ar: "HART تعني محول بعيد قابل للعنونة للطريق السريع، وهو بروتوكول اتصال لأتمتة العمليات الصناعية."
    },
    { 
        question_en: "Full form of LPWAN:", 
        question_ar: "النموذج الكامل لـ LPWAN:", 
        options: [
            { text_en: "Low Power Wide Area Network", text_ar: "شبكة المنطقة الواسعة منخفضة الطاقة" }, 
            { text_en: "Lower Power Wide Area of Network", text_ar: "منطقة الشبكة الواسعة ذات الطاقة المنخفضة" }, 
            { text_en: "Low Protocol Wide Area of Network", text_ar: "منطقة الشبكة الواسعة ذات البروتوكول المنخفض" }, 
            { text_en: "Long Protocol Wider Area Network", text_ar: "شبكة المنطقة الأوسع ذات البروتوكول الطويل" }
        ], 
        correctAnswer: "A",
        explanation_en: "LPWAN stands for Low Power Wide Area Network, designed for long-range communications with low power consumption.",
        explanation_ar: "LPWAN تعني شبكة المنطقة الواسعة منخفضة الطاقة، مصممة للاتصالات طويلة المدى باستهلاك منخفض للطاقة."
    },
    { 
        question_en: "What do API systems enable?", 
        question_ar: "ماذا تمكن أنظمة API؟", 
        options: [
            { text_en: "Networks service portability is allowed by API", text_ar: "يسمح API بإمكانية نقل خدمة الشبكات" }, 
            { text_en: "Systems service portability is allowed by API", text_ar: "يسمح API بإمكانية نقل خدمة الأنظمة" }, 
            { text_en: "Device service portability is allowed by API", text_ar: "يسمح API بإمكانية نقل خدمة الأجهزة" }, 
            { text_en: "All of these", text_ar: "كل هذه" }
        ], 
        correctAnswer: "B",
        explanation_en: "API systems enable systems service portability, allowing different systems to communicate and share services.",
        explanation_ar: "تمكن أنظمة API إمكانية نقل خدمة الأنظمة، مما يسمح للأنظمة المختلفة بالتواصل ومشاركة الخدمات."
    },
    { 
        question_en: "What do RESTful API systems allow the user?", 
        question_ar: "ماذا تسمح أنظمة RESTful API للمستخدم؟", 
        options: [
            { text_en: "to enhance security", text_ar: "تعزيز الأمان" }, 
            { text_en: "to modify communication capability", text_ar: "تعديل قدرة الاتصال" }, 
            { text_en: "to control electronic components", text_ar: "التحكم في المكونات الإلكترونية" }, 
            { text_en: "All of these", text_ar: "كل هذه" }
        ], 
        correctAnswer: "C",
        explanation_en: "RESTful API systems allow users to control electronic components through standardized web interfaces.",
        explanation_ar: "تسمح أنظمة RESTful API للمستخدمين بالتحكم في المكونات الإلكترونية عبر واجهات ويب قياسية."
    },
    { 
        question_en: "In IoT, does the ______ layer help in end-to-end communication?", 
        question_ar: "في إنترنت الأشياء، هل تساعد طبقة ______ في الاتصال من طرف إلى طرف؟", 
        options: [
            { text_en: "security", text_ar: "الأمان" }, 
            { text_en: "transport", text_ar: "النقل" }, 
            { text_en: "data communication", text_ar: "اتصال البيانات" }, 
            { text_en: "logical", text_ar: "المنطقية" }
        ], 
        correctAnswer: "B",
        explanation_en: "The transport layer provides end-to-end communication services in IoT networks.",
        explanation_ar: "توفر طبقة النقل خدمات الاتصال من طرف إلى طرف في شبكات إنترنت الأشياء."
    },
    { 
        question_en: "LTE stands for:", 
        question_ar: "LTE تعني:", 
        options: [
            { text_en: "Long Terminal evolution", text_ar: "تطور المحطة الطويلة" }, 
            { text_en: "Lower Terminal evolution", text_ar: "تطور المحطة المنخفضة" }, 
            { text_en: "Long Term evolution", text_ar: "التطور طويل الأمد" }, 
            { text_en: "None", text_ar: "لا شيء" }
        ], 
        correctAnswer: "C",
        explanation_en: "LTE stands for Long Term Evolution, a standard for wireless broadband communication.",
        explanation_ar: "LTE تعني التطور طويل الأمد، وهو معيار لاتصال النطاق العريض اللاسلكي."
    },
    { 
        question_en: "Many-Valued Logic is formed because of:", 
        question_ar: "تم تشكيل المنطق متعدد القيم بسبب:", 
        options: [
            { text_en: "binary logic", text_ar: "المنطق الثنائي" }, 
            { text_en: "Hexa logic", text_ar: "المنطق السداسي" }, 
            { text_en: "fuzzy logic", text_ar: "المنطق الضبابي" }, 
            { text_en: "All of these", text_ar: "كل هذه" }
        ], 
        correctAnswer: "C",
        explanation_en: "Many-Valued Logic extends traditional binary logic to handle uncertainty and partial truth, forming fuzzy logic systems.",
        explanation_ar: "يمدد المنطق متعدد القيم المنطق الثنائي التقليدي للتعامل مع عدم اليقين والحقيقة الجزئية، مشكلاً أنظمة المنطق الضبابي."
    },
    { 
        question_en: "The collection of ____ that connects several devices is called the bus.", 
        question_ar: "تسمى مجموعة ____ التي تربط عدة أجهزة بالناقل.", 
        options: [
            { text_en: "network", text_ar: "الشبكة" }, 
            { text_en: "lines", text_ar: "الخطوط" }, 
            { text_en: "cables", text_ar: "الكابلات" }, 
            { text_en: "None of these", text_ar: "لا شيء من هذه" }
        ], 
        correctAnswer: "B",
        explanation_en: "A bus is a collection of communication lines that connect multiple devices in a computer system.",
        explanation_ar: "الناقل هو مجموعة من خطوط الاتصال التي تربط أجهزة متعددة في نظام الكمبيوتر."
    },
    { 
        question_en: "____ is a security mechanism used in WiFi.", 
        question_ar: "____ هي آلية أمان مستخدمة في WiFi.", 
        options: [
            { text_en: "WPA", text_ar: "WPA" }, 
            { text_en: "HTTP", text_ar: "HTTP" }, 
            { text_en: "MLA", text_ar: "MLA" }, 
            { text_en: "None of these", text_ar: "لا شيء من هذه" }
        ], 
        correctAnswer: "A",
        explanation_en: "WPA (Wi-Fi Protected Access) is a security mechanism used to secure wireless networks.",
        explanation_ar: "WPA (الوصول المحمي لشبكة Wi-Fi) هي آلية أمان تستخدم لتأمين الشبكات اللاسلكية."
    },
    { 
        question_en: "The main purpose of the web of things(WoT) in IoT is:", 
        question_ar: "الغرض الرئيسي من شبكة الأشياء (WoT) في إنترنت الأشياء هو:", 
        options: [
            { text_en: "to increase the cost", text_ar: "زيادة التكلفة" }, 
            { text_en: "to improve security", text_ar: "تحسين الأمان" }, 
            { text_en: "to improve the usability and interoperability", text_ar: "تحسين إمكانية الاستخدام والتشغيل البيني" }, 
            { text_en: "All of these", text_ar: "كل هذه" }
        ], 
        correctAnswer: "C",
        explanation_en: "The main purpose of WoT is to improve usability and interoperability of IoT devices through web standards.",
        explanation_ar: "الغرض الرئيسي من WoT هو تحسين إمكانية الاستخدام والتشغيل البيني لأجهزة إنترنت الأشياء عبر معايير الويب."
    },
    { 
        question_en: "The storage is ______ in IoT.", 
        question_ar: "التخزين ______ في إنترنت الأشياء.", 
        options: [
            { text_en: "limited", text_ar: "محدود" }, 
            { text_en: "unlimited", text_ar: "غير محدود" }, 
            { text_en: "not available", text_ar: "غير متاح" }, 
            { text_en: "All of these", text_ar: "كل هذه" }
        ], 
        correctAnswer: "A",
        explanation_en: "Storage in IoT devices is typically limited due to size, power, and cost constraints.",
        explanation_ar: "التخزين في أجهزة إنترنت الأشياء محدود عادةً بسبب قيود الحجم والطاقة والتكلفة."
    },
    { 
        question_en: "At what rate can NFC transmit data?", 
        question_ar: "بأي معدل يمكن لـ NFC نقل البيانات؟", 
        options: [
            { text_en: "424 Kbps", text_ar: "424 كيلوبت في الثانية" }, 
            { text_en: "1106 Kbps", text_ar: "1106 كيلوبت في الثانية" }, 
            { text_en: "216 Kbps", text_ar: "216 كيلوبت في الثانية" }, 
            { text_en: "All of these", text_ar: "كل هذه" }
        ], 
        correctAnswer: "D",
        explanation_en: "NFC can transfer data at various speeds including 212, 424, and 106 Kbps depending on the mode.",
        explanation_ar: "يمكن لـ NFC نقل البيانات بسرعات مختلفة بما في ذلك 212 و424 و106 كيلوبت في الثانية حسب الوضع."
    },
    { 
        question_en: "The standard form of ICT is:", 
        question_ar: "النموذج القياسي لـ ICT هو:", 
        options: [
            { text_en: "Inter Connected Technology", text_ar: "التكنولوجيا المترابطة" }, 
            { text_en: "International Connection Technology", text_ar: "تكنولوجيا الاتصال الدولية" }, 
            { text_en: "Inter Communication Technology", text_ar: "تكنولوجيا الاتصال المتبادل" }, 
            { text_en: "Information and Communication Technology", text_ar: "تكنولوجيا المعلومات والاتصالات" }
        ], 
        correctAnswer: "D",
        explanation_en: "ICT stands for Information and Communication Technology, encompassing all technologies for information handling and communication.",
        explanation_ar: "ICT تعني تكنولوجيا المعلومات والاتصالات، وتشمل جميع التقنيات لمعالجة المعلومات والاتصال."
    },
    { 
        question_en: "Which of the following uses Java Language?", 
        question_ar: "أي من التالي يستخدم لغة الجافا؟", 
        options: [
            { text_en: "GSN", text_ar: "GSN" }, 
            { text_en: "MMQT", text_ar: "MMQT" }, 
            { text_en: "GAN", text_ar: "GAN" }, 
            { text_en: "None of these", text_ar: "لا شيء من هذه" }
        ], 
        correctAnswer: "A",
        explanation_en: "GSN (Global Sensor Networks) is a middleware platform for sensor networks that uses Java programming language.",
        explanation_ar: "GSN (شبكات المستشعرات العالمية) هي منصة وسيطة لشبكات المستشعرات تستخدم لغة برمجة الجافا."
    },
    { 
        question_en: "Domain Name System is used to:", 
        question_ar: "يستخدم نظام أسماء النطاقات ل:", 
        options: [
            { text_en: "provide system security", text_ar: "توفير أمان النظام" }, 
            { text_en: "enhance network communication", text_ar: "تعزيز اتصال الشبكة" }, 
            { text_en: "increase data and speed", text_ar: "زيادة البيانات والسرعة" }, 
            { text_en: "obtain IP Address", text_ar: "الحصول على عنوان IP" }
        ], 
        correctAnswer: "D",
        explanation_en: "DNS (Domain Name System) is used to translate domain names to IP addresses.",
        explanation_ar: "يستخدم DNS (نظام أسماء النطاقات) لترجمة أسماء النطاقات إلى عناوين IP."
    },
    { 
        question_en: "The standard form of CGI is:", 
        question_ar: "النموذج القياسي لـ CGI هو:", 
        options: [
            { text_en: "Common Gateway of Interest", text_ar: "البوابة المشتركة للاهتمام" }, 
            { text_en: "Common Gate Interface", text_ar: "واجهة البوابة المشتركة" }, 
            { text_en: "Common Gateway Interdependent", text_ar: "البوابة المشتركة المترابطة" }, 
            { text_en: "None", text_ar: "لا شيء" }
        ], 
        correctAnswer: "D",
        explanation_en: "CGI stands for Common Gateway Interface, a standard for web servers to execute programs.",
        explanation_ar: "CGI تعني واجهة البوابة المشتركة، وهو معيار لخوادم الويب لتنفيذ البرامج."
    },
    { 
        question_en: "Which of the following is not a short-range wireless network?", 
        question_ar: "أي من التالي ليست شبكة لاسلكية قصيرة المدى؟", 
        options: [
            { text_en: "Bluetooth", text_ar: "بلوتوث" }, 
            { text_en: "VPN", text_ar: "VPN" }, 
            { text_en: "Wifi", text_ar: "واي فاي" }, 
            { text_en: "Hotspot", text_ar: "نقطة اتصال" }
        ], 
        correctAnswer: "B",
        explanation_en: "VPN (Virtual Private Network) is a security technology, not a short-range wireless network technology.",
        explanation_ar: "VPN (شبكة افتراضية خاصة) هي تقنية أمان، وليست تقنية شبكة لاسلكية قصيرة المدى."
    },
    { 
        question_en: "A ______ is the component that executes a program in an IoT system.", 
        question_ar: "______ هو المكون الذي ينفذ برنامجًا في نظام إنترنت الأشياء.", 
        options: [
            { text_en: "micro converter", text_ar: "المحول الدقيق" }, 
            { text_en: "microcontroller", text_ar: "المتحكم الدقيق" }, 
            { text_en: "microsensor", text_ar: "المستشعر الدقيق" }, 
            { text_en: "None", text_ar: "لا شيء" }
        ], 
        correctAnswer: "B",
        explanation_en: "A microcontroller is the component that executes programs in IoT systems, containing CPU, memory, and I/O peripherals.",
        explanation_ar: "المتحكم الدقيق هو المكون الذي ينفذ البرامج في أنظمة إنترنت الأشياء، ويحتوي على وحدة المعالجة المركزية والذاكرة وملحقات الإدخال/الإخراج."
    },
    { 
        question_en: "Which of the following is not LPWAN Technologies?", 
        question_ar: "أي من التالي ليست تقنيات LPWAN؟", 
        options: [
            { text_en: "LORA", text_ar: "لورا" }, 
            { text_en: "SIGFOX", text_ar: "سيج فوكس" }, 
            { text_en: "NB-IoT", text_ar: "إن بي-آي أو تي" }, 
            { text_en: "Bluetooth", text_ar: "بلوتوث" }
        ], 
        correctAnswer: "D",
        explanation_en: "Bluetooth is a short-range wireless technology, not a Low Power Wide Area Network (LPWAN) technology.",
        explanation_ar: "البلوتوث هي تقنية لاسلكية قصيرة المدى، وليست تقنية شبكة منطقة واسعة منخفضة الطاقة (LPWAN)."
    },
    { 
        question_en: "With two-factor Authentication, which attack can be users vulnerable to?", 
        question_ar: "مع المصادقة الثنائية، أي هجوم يمكن أن يكون المستخدمون عرضة له؟", 
        options: [
            { text_en: "Ransome ware Attack", text_ar: "هجوم برامج الفدية" }, 
            { text_en: "Man-in-the-middle attack", text_ar: "هجوم الرجل في المنتصف" }, 
            { text_en: "Cross Attack", text_ar: "الهجوم المتقاطع" }, 
            { text_en: "Radiant Attack", text_ar: "الهجوم المشع" }
        ], 
        correctAnswer: "B",
        explanation_en: "Even with two-factor authentication, users can be vulnerable to man-in-the-middle attacks where attackers intercept communications.",
        explanation_ar: "حتى مع المصادقة الثنائية، يمكن أن يكون المستخدمون عرضة لهجمات الرجل في المنتصف حيث يعترض المهاجمون الاتصالات."
    },
    { 
        question_en: "Which one out of these is in a format which is not readable by the user?", 
        question_ar: "أي واحد من هذه يكون بتنسيق غير قابل للقراءة من قبل المستخدم؟", 
        options: [
            { text_en: "Encryption", text_ar: "التشفير" }, 
            { text_en: "Passwords", text_ar: "كلمات المرور" }, 
            { text_en: ".text", text_ar: ".text" }, 
            { text_en: "None of these", text_ar: "لا شيء من هذه" }
        ], 
        correctAnswer: "A",
        explanation_en: "Encryption converts data into a format that is not readable by users without the proper decryption key.",
        explanation_ar: "يحول التشفير البيانات إلى تنسيق غير قابل للقراءة من قبل المستخدمين بدون مفتاح فك التشفير المناسب."
    },
    { 
        question_en: "What is the full form of IoT?", 
        question_ar: "ما هو النموذج الكامل لـ IoT؟", 
        options: [
            { text_en: "Internet of Technology", text_ar: "إنترنت التكنولوجيا" }, 
            { text_en: "Incorporate of Things", text_ar: "دمج الأشياء" }, 
            { text_en: "Internet of Things", text_ar: "إنترنت الأشياء" }, 
            { text_en: "Incorporate of Technology", text_ar: "دمج التكنولوجيا" }
        ], 
        correctAnswer: "C",
        explanation_en: "The full form of IoT is the 'Internet of Things'. IoT means accessing and controlling equipment and devices that are used daily through the Internet.",
        explanation_ar: "النموذج الكامل لـ IoT هو 'إنترنت الأشياء'. يعني IoT الوصول إلى المعدات والأجهزة التي تُستخدم يوميًا والتحكم فيها عبر الإنترنت."
    },
    { 
        question_en: "What is IoT?", 
        question_ar: "ما هو إنترنت الأشياء؟", 
        options: [
            { text_en: "network of physical objects embedded with sensors", text_ar: "شبكة من الأشياء المادية المضمنة بأجهزة استشعار" }, 
            { text_en: "network of virtual objects", text_ar: "شبكة من الأشياء الافتراضية" }, 
            { text_en: "network of objects in the ring structure", text_ar: "شبكة من الأشياء في هيكل الحلقة" }, 
            { text_en: "network of sensors", text_ar: "شبكة من أجهزة الاستشعار" }
        ], 
        correctAnswer: "A",
        explanation_en: "The Internet of Things (IoT) is a network of physical objects embedded with sensors, software, and other technologies for exchanging data with other devices over the internet.",
        explanation_ar: "إنترنت الأشياء (IoT) هو شبكة من الأشياء المادية المضمنة بأجهزة استشعار وبرامج وتقنيات أخرى لتبادل البيانات مع أجهزة أخرى عبر الإنترنت."
    },
    { 
        question_en: "Who coined the term 'Internet of Things'?", 
        question_ar: "من صاغ مصطلح 'إنترنت الأشياء'؟", 
        options: [
            { text_en: "Kevin Aston", text_ar: "كيفن أستون" }, 
            { text_en: "John Wright", text_ar: "جون رايت" }, 
            { text_en: "Edward Jameson", text_ar: "إدوارد جيمسون" }, 
            { text_en: "George Garton", text_ar: "جورج جارتون" }
        ], 
        correctAnswer: "A",
        explanation_en: "Kevin Aston coined the term 'Internet of Things' in 1999 during his work at Procter & Gamble to describe the network connecting objects in the physical world with the Internet.",
        explanation_ar: "صاغ كيفن أستون مصطلح 'إنترنت الأشياء' في عام 1999 أثناء عمله في شركة بروكتر آند غامبل لوصف الشبكة التي تربط الأشياء في العالم المادي بالإنترنت."
    },
    { 
        question_en: "When was the actual term 'Internet of Things' coined?", 
        question_ar: "متى تم صياغة مصطلح 'إنترنت الأشياء' فعليًا؟", 
        options: [
            { text_en: "1998", text_ar: "1998" }, 
            { text_en: "1999", text_ar: "1999" }, 
            { text_en: "2000", text_ar: "2000" }, 
            { text_en: "2002", text_ar: "2002" }
        ], 
        correctAnswer: "B",
        explanation_en: "The actual term 'Internet of Things' was coined in 1999 by technologist Kevin Aston during his work at Procter & Gamble while giving a presentation about technology and the internet.",
        explanation_ar: "تم صياغة مصطلح 'إنترنت الأشياء' فعليًا في عام 1999 من قبل التكنولوجي كيفن أستون أثناء عمله في شركة بروكتر آند غامبل أثناء تقديم عرض تقديمي حول التكنولوجيا والإنترنت."
    },
    { 
        question_en: "Which of the following is not an IoT device?", 
        question_ar: "أي من الأجهزة التالية ليس جهاز إنترنت أشياء؟", 
        options: [
            { text_en: "Table", text_ar: "طاولة" }, 
            { text_en: "Laptop", text_ar: "كمبيوتر محمول" }, 
            { text_en: "Arduino", text_ar: "اردوينو" }, 
            { text_en: "Tablet", text_ar: "جهاز لوحي" }
        ], 
        correctAnswer: "A",
        explanation_en: "A regular table without any sensors or connectivity is not an IoT device, while laptops, Arduino boards, and tablets can be part of IoT systems.",
        explanation_ar: "الطاولة العادية بدون أي أجهزة استشعار أو اتصال ليست جهاز إنترنت أشياء، بينما يمكن أن تكون أجهزة الكمبيوتر المحمولة والأردوينو والأجهزة اللوحية جزءًا من أنظمة إنترنت الأشياء."
    },
    { 
        question_en: "Which of the following is false about IoT devices?", 
        question_ar: "أي من العبارات التالية غير صحيحة حول أجهزة إنترنت الأشياء؟", 
        options: [
            { text_en: "IoT devices use the internet for collecting and sharing data", text_ar: "تستخدم أجهزة إنترنت الأشياء الإنترنت لجمع البيانات ومشاركتها" }, 
            { text_en: "IoT devices need microcontrollers", text_ar: "تحتاج أجهزة إنترنت الأشياء إلى متحكمات دقيقة" }, 
            { text_en: "IoT devices use wireless technology", text_ar: "تستخدم أجهزة إنترنت الأشياء التكنولوجيا اللاسلكية" }, 
            { text_en: "IoT devices are completely safe", text_ar: "أجهزة إنترنت الأشياء آمنة تمامًا" }
        ], 
        correctAnswer: "D",
        explanation_en: "IoT devices are wireless devices and they use the internet for collecting and sharing data. They are not completely safe because they store data and sometimes hackers access them.",
        explanation_ar: "أجهزة إنترنت الأشياء هي أجهزة لاسلكية وتستخدم الإنترنت لجمع البيانات ومشاركتها. إنها ليست آمنة تمامًا لأنها تخزن البيانات وأحيانًا يصل إليها المتسللون."
    },
    { 
        question_en: "Which of the following is not an IoT platform?", 
        question_ar: "أي من التالي ليس منصة إنترنت أشياء؟", 
        options: [
            { text_en: "Amazon Web Services", text_ar: "خدمات أمازون ويب" }, 
            { text_en: "Microsoft Azure", text_ar: "مايكروسوفت أزور" }, 
            { text_en: "Salesforce", text_ar: "سيلزفورس" }, 
            { text_en: "Flipkart", text_ar: "فليبكارت" }
        ], 
        correctAnswer: "D",
        explanation_en: "Amazon Web Services, Microsoft Azure, and Salesforce provide cloud computing IoT services. But Flipkart is an e-commerce website that provides marketing facilities.",
        explanation_ar: "توفر خدمات أمازون ويب ومايكروسوفت أزور وسيلزفورس خدمات الحوسبة السحابية لإنترنت الأشياء. لكن فليبكارت هو موقع تجارة إلكترونية يوفر مرافق تسويقية."
    },
    { 
        question_en: "Which of the following is not an application of IoT?", 
        question_ar: "أي من التالي ليس تطبيقًا لإنترنت الأشياء؟", 
        options: [
            { text_en: "BMP280", text_ar: "BMP280" }, 
            { text_en: "Smart home", text_ar: "المنزل الذكي" }, 
            { text_en: "Smart city", text_ar: "المدينة الذكية" }, 
            { text_en: "Self-driven cars", text_ar: "السيارات ذاتية القيادة" }
        ], 
        correctAnswer: "A",
        explanation_en: "Smart homes, smart cities, and self-driven cars are applications of IoT. BMP280 is a sensor that is used to measure air pressure. It is a component of IoT devices.",
        explanation_ar: "المنازل الذكية والمدن الذكية والسيارات ذاتية القيادة هي تطبيقات لإنترنت الأشياء. BMP280 هو مستشعر يستخدم لقياس ضغط الهواء. إنه مكون من مكونات أجهزة إنترنت الأشياء."
    },
    { 
        question_en: "Which of the following is not a fundamental component of an IoT system?", 
        question_ar: "أي من التالي ليس مكونًا أساسيًا لنظام إنترنت الأشياء؟", 
        options: [
            { text_en: "Sensors", text_ar: "أجهزة الاستشعار" }, 
            { text_en: "Connectivity and data processing", text_ar: "الاتصال ومعالجة البيانات" }, 
            { text_en: "User interface", text_ar: "واجهة المستخدم" }, 
            { text_en: "Transformer", text_ar: "المحول" }
        ], 
        correctAnswer: "D",
        explanation_en: "Sensors are required to collect data, network connectivity is required for data processing and to interface with the user. Transformers are not required as they are used for voltage transformation.",
        explanation_ar: "أجهزة الاستشعار مطلوبة لجمع البيانات، واتصال الشبكة مطلوب لمعالجة البيانات والتفاعل مع المستخدم. المحولات غير مطلوبة لأنها تُستخدم لتحويل الجهد الكهربائي."
    },
    { 
        question_en: "What is the full form of IIOT?", 
        question_ar: "ما هو النموذج الكامل لـ IIOT؟", 
        options: [
            { text_en: "Index Internet of Things", text_ar: "فهرس إنترنت الأشياء" }, 
            { text_en: "Incorporate Internet of Things", text_ar: "دمج إنترنت الأشياء" }, 
            { text_en: "Industrial Internet of Things", text_ar: "إنترنت الأشياء الصناعي" }, 
            { text_en: "Intense Internet of Things", text_ar: "إنترنت الأشياء المكثف" }
        ], 
        correctAnswer: "C",
        explanation_en: "IIOT stands for Industrial Internet of Things, which refers to the use of IoT technologies in industrial settings and applications.",
        explanation_ar: "IIOT هي اختصار لـ إنترنت الأشياء الصناعي، والذي يشير إلى استخدام تقنيات إنترنت الأشياء في البيئات والتطبيقات الصناعية."
    },
    { 
        question_en: "Which layer is used for wireless connection in IoT devices?", 
        question_ar: "أي طبقة تُستخدم للاتصال اللاسلكي في أجهزة إنترنت الأشياء؟", 
        options: [
            { text_en: "Application layer", text_ar: "طبقة التطبيق" }, 
            { text_en: "Network layer", text_ar: "طبقة الشبكة" }, 
            { text_en: "Data link layer", text_ar: "طبقة ربط البيانات" }, 
            { text_en: "Transport layer", text_ar: "طبقة النقل" }
        ], 
        correctAnswer: "C",
        explanation_en: "Data link layer is used for Ethernet and wireless connections. The network layer is used for Internet Protocols. The transport layer is used for TCP/UDP protocols and the application layer directly interacts with the application.",
        explanation_ar: "تُستخدم طبقة ربط البيانات لاتصالات الإيثرنت واللاسلكية. تُستخدم طبقة الشبكة لبروتوكولات الإنترنت. تُستخدم طبقة النقل لبروتوكولات TCP/UDP وتتفاعل طبقة التطبيق مباشرة مع التطبيق."
    },
    { 
        question_en: "Which of the following is false about the IoT components?", 
        question_ar: "أي من العبارات التالية غير صحيحة حول مكونات إنترنت الأشياء؟", 
        options: [
            { text_en: "A light sensor (photoresistor) is an analog sensor", text_ar: "مستشعر الضوء (المقاوم الضوئي) هو مستشعر تماثلي" }, 
            { text_en: "A microphone is a digital sensor", text_ar: "الميكروفون هو مستشعر رقمي" }, 
            { text_en: "A push button is a digital sensor", text_ar: "زر الضغط هو مستشعر رقمي" }, 
            { text_en: "A keyboard is a digital sensor", text_ar: "لوحة المفاتيح هي مستشعر رقمي" }
        ], 
        correctAnswer: "B",
        explanation_en: "A light sensor is an analog sensor because it senses light intensity. A microphone is also an analog sensor because it senses sound. Push buttons and keyboards are operated digitally so, they are digital sensors.",
        explanation_ar: "مستشعر الضوء هو مستشعر تماثلي لأنه يستشعر شدة الضوء. الميكروفون هو أيضًا مستشعر تماثلي لأنه يستشعر الصوت. يتم تشغيل أزرار الضغط ولوحات المفاتيح رقميًا، لذا فهي أجهزة استشعار رقمية."
    },
    { 
        question_en: "Which of the following is used to capture data from the physical world in IoT devices?", 
        question_ar: "أي من التالي يُستخدم لالتقاط البيانات من العالم المادي في أجهزة إنترنت الأشياء؟", 
        options: [
            { text_en: "Sensors", text_ar: "أجهزة الاستشعار" }, 
            { text_en: "Actuators", text_ar: "المشغلات" }, 
            { text_en: "Microprocessors", text_ar: "المعالجات الدقيقة" }, 
            { text_en: "Microcontrollers", text_ar: "المتحكمات الدقيقة" }
        ], 
        correctAnswer: "A",
        explanation_en: "Sensors are used to capture data from the physical world. Microprocessors and microcontrollers are used to control the operations and actuators are for outputs of IoT devices.",
        explanation_ar: "تُستخدم أجهزة الاستشعار لالتقاط البيانات من العالم المادي. تُستخدم المعالجات الدقيقة والمتحكمات الدقيقة للتحكم في العمليات والمشغلات للمخرجات من أجهزة إنترنت الأشياء."
    },
    { 
        question_en: "Which of the following command is used to trigger the Amazon echo IoT device?", 
        question_ar: "أي من الأوامر التالية يُستخدم لتفعيل جهاز Amazon echo لإنترنت الأشياء؟", 
        options: [
            { text_en: "Hello", text_ar: "مرحبًا" }, 
            { text_en: "Sun", text_ar: "شمس" }, 
            { text_en: "Alexa", text_ar: "أليكسا" }, 
            { text_en: "Hey", text_ar: "مرحبًا" }
        ], 
        correctAnswer: "C",
        explanation_en: "Amazon Echo is a hands-free speaker that can be controlled with the human voice. It connects to Alexa voice services and 'Alexa' command is used to trigger Amazon echo IoT device.",
        explanation_ar: "Amazon Echo هو مكبر صوت لا يستخدم اليدين يمكن التحكم فيه بالصوت البشري. يتصل بخدمات صوت أليكسا ويُستخدم أمر 'أليكسا' لتفعيل جهاز Amazon echo لإنترنت الأشياء."
    },
    { 
        question_en: "Which of the following is false about the MANET IoT network?", 
        question_ar: "أي من العبارات التالية غير صحيحة حول شبكة MANET لإنترنت الأشياء؟", 
        options: [
            { text_en: "It is a self-configuring network", text_ar: "إنها شبكة ذاتية التكوين" }, 
            { text_en: "It has a low data rate", text_ar: "لديها معدل بيانات منخفض" }, 
            { text_en: "It doesn't have any encryption", text_ar: "ليس لديها أي تشفير" }, 
            { text_en: "Power is readily available for complex security", text_ar: "الطاقة متاحة بسهولة للأمان المعقد" }
        ], 
        correctAnswer: "D",
        explanation_en: "MANET is an unstable network. It is self-configuring and it has a low data rate. It doesn't have power availability for complex security. It also doesn't have any encryption.",
        explanation_ar: "MANET هي شبكة غير مستقرة. إنها ذاتية التكوين ولديها معدل بيانات منخفض. ليس لديها طاقة متاحة للأمان المعقد. كما أنها لا تحتوي على أي تشفير."
    },
    { 
        question_en: "Which of the following is not a sensor in IoT?", 
        question_ar: "أي من التالي ليس مستشعرًا في إنترنت الأشياء؟", 
        options: [
            { text_en: "BMP280", text_ar: "BMP280" }, 
            { text_en: "DHT11", text_ar: "DHT11" }, 
            { text_en: "Photoresistor", text_ar: "المقاوم الضوئي" }, 
            { text_en: "LED", text_ar: "LED" }
        ], 
        correctAnswer: "D",
        explanation_en: "BMP280 is an air pressure sensor. DHT11 is a humidity and temperature sensor. A photoresistor is a light sensor. LED is not a sensor as it emits light.",
        explanation_ar: "BMP280 هو مستشعر ضغط الهواء. DHT11 هو مستشعر الرطوبة ودرجة الحرارة. المقاوم الضوئي هو مستشعر ضوئي. LED ليس مستشعرًا لأنه يصدر ضوءًا."
    },
    { 
        question_en: "Which of the following is not an actuator in IoT?", 
        question_ar: "أي من التالي ليس مشغلًا في إنترنت الأشياء؟", 
        options: [
            { text_en: "Stepper motor", text_ar: "المحرك السائر" }, 
            { text_en: "A fan", text_ar: "مروحة" }, 
            { text_en: "An LED", text_ar: "LED" }, 
            { text_en: "Arduino", text_ar: "اردوينو" }
        ], 
        correctAnswer: "D",
        explanation_en: "Stepper motors, fans, and LEDs are actuators that can be controlled in IoT systems. Arduino is a microcontroller platform, not an actuator itself.",
        explanation_ar: "المحركات السائرة والمراوح ومصابيح LED هي مشغلات يمكن التحكم فيها في أنظمة إنترنت الأشياء. اردوينو هو منصة متحكم دقيق، وليس مشغلًا في حد ذاته."
    },
    { 
        question_en: "What is the use of PWM signals in IoT development boards?", 
        question_ar: "ما هو استخدام إشارات PWM في لوحات تطوير إنترنت الأشياء؟", 
        options: [
            { text_en: "They are used by sensors to have analog input", text_ar: "يتم استخدامها بواسطة أجهزة الاستشعار للحصول على إدخال تماثلي" }, 
            { text_en: "They are used by sensors to have digital input", text_ar: "يتم استخدامها بواسطة أجهزة الاستشعار للحصول على إدخال رقمي" }, 
            { text_en: "They are used by actuators to have analog input", text_ar: "يتم استخدامها بواسطة المشغلات للحصول على إدخال تماثلي" }, 
            { text_en: "They are used by actuators to have digital input", text_ar: "يتم استخدامها بواسطة المشغلات للحصول على إدخال رقمي" }
        ], 
        correctAnswer: "C",
        explanation_en: "PWM signals are used for power regulation. Actuators mostly need analog signals to operate. So, PWM signals are used by actuators to have analog input.",
        explanation_ar: "تُستخدم إشارات PWM لتنظيم الطاقة. تحتاج المشغلات في الغالب إلى إشارات تماثلية للعمل. لذلك، تُستخدم إشارات PWM بواسطة المشغلات للحصول على إدخال تماثلي."
    },
    { 
        question_en: "Which of the following is used to reprogram a Bootloader in IoT devices?", 
        question_ar: "أي من التالي يُستخدم لإعادة برمجة Bootloader في أجهزة إنترنت الأشياء؟", 
        options: [
            { text_en: "VHDL programming", text_ar: "برمجة VHDL" }, 
            { text_en: "IDE", text_ar: "IDE" }, 
            { text_en: "ICSP", text_ar: "ICSP" }, 
            { text_en: "MANET", text_ar: "MANET" }
        ], 
        correctAnswer: "C",
        explanation_en: "Bootloader is firmware on a microcontroller. ICSP is used to reprogram a Bootloader in IoT devices. ICSP stands for In-Circuit Serial Programming. It is a special programming method to program firmware.",
        explanation_ar: "Bootloader هو برنامج ثابت على متحكم دقيق. يُستخدم ICSP لإعادة برمجة Bootloader في أجهزة إنترنت الأشياء. ICSP تعني البرمجة التسلسلية داخل الدائرة. إنها طريقة برمجة خاصة لبرمجة البرامج الثابتة."
    },
    { 
        question_en: "Which of the following is true about Arduino IoT devices?", 
        question_ar: "أي من العبارات التالية صحيحة حول أجهزة اردوينو لإنترنت الأشياء؟", 
        options: [
            { text_en: "They are open-source software", text_ar: "إنها برامج مفتوحة المصدر" }, 
            { text_en: "They can only read analog inputs", text_ar: "يمكنها قراءة المدخلات التماثلية فقط" }, 
            { text_en: "They have their own operating systems", text_ar: "لديها أنظمة تشغيل خاصة بها" }, 
            { text_en: "They don't have pre-programmed firmware", text_ar: "ليس لديها برامج ثابتة مبرمجة مسبقًا" }
        ], 
        correctAnswer: "A",
        explanation_en: "Arduino designs are open-source software. They can read both analog and digital inputs. They don't have operating systems and firmware is pre-programmed inside them.",
        explanation_ar: "تصميمات اردوينو هي برامج مفتوحة المصدر. يمكنها قراءة كل من المدخلات التماثلية والرقمية. ليس لديها أنظمة تشغيل والبرامج الثابتة مبرمجة مسبقًا بداخلها."
    }
    // يمكنك إضافة المزيد من الأسئلة هنا
];