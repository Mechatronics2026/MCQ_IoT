// مجموعة أسئلة
var quizData = [
    { 
        question_en: "Through which network does Open IoT manage registration, deployment of sensors?", 
        question_ar: "من خلال أي شبكة تدير Open IoT تسجيل ونشر أجهزة الاستشعار؟", 
        options: [
            { text_en: "LSM", text_ar: "LSM" }, 
            { text_en: "HTTP", text_ar: "HTTP" }, 
            { text_en: "X-GSN", text_ar: "X-GSN" }, 
            { text_en: "GSN", text_ar: "GSN" }
        ], 
        correctAnswer: "B",
        explanation_en: "Open IoT uses HTTP for managing sensor registration and deployment.",
        explanation_ar: "تستخدم Open IoT بروتوكول HTTP لإدارة تسجيل أجهزة الاستشعار ونشرها."
    },
    { 
        question_en: "MQTT stands for ______", 
        question_ar: "MQTT تعني ______", 
        options: [
            { text_en: "Message Query Telemetry Transport", text_ar: "نقل قياسات عن بعد لاستعلام الرسائل" }, 
            { text_en: "MetaQuery Telemetry Transport", text_ar: "نقل قياسات عن بعد لاستعلام ميتا" }, 
            { text_en: "Multiple Query Telemetry Transport", text_ar: "نقل قياسات عن بعد لاستعلام متعدد" }, 
            { text_en: "Multi-Queue Query Telemetry Transport", text_ar: "نقل قياسات عن بعد لاستعلام متعدد الطوابير" }
        ], 
        correctAnswer: "A",
        explanation_en: "MQTT stands for Message Queuing Telemetry Transport, a lightweight messaging protocol.",
        explanation_ar: "MQTT تعني نقل قياسات عن بعد لقائمة الانتظار، وهو بروتوكول مراسلة خفيف الوزن."
    },
    { 
        question_en: "On what is MQTT based upon?", 
        question_ar: "ما الذي يعتمد عليه MQTT؟", 
        options: [
            { text_en: "Publish-subscribe architecture", text_ar: "هندسة النشر والاشتراك" }, 
            { text_en: "Client-server architecture", text_ar: "هندسة العميل والخادم" }, 
            { text_en: "Both A and B", text_ar: "كلا أ و ب" }, 
            { text_en: "None", text_ar: "لا شيء" }
        ], 
        correctAnswer: "A",
        explanation_en: "MQTT is based on the publish-subscribe model, not the client-server architecture.",
        explanation_ar: "يعتمد MQTT على نموذج النشر والاشتراك، وليس على هندسة العميل والخادم."
    },
    { 
        question_en: "Service is termed as ____, in SOA", 
        question_ar: "يُطلق على الخدمة اسم ____ في SOA", 
        options: [
            { text_en: "Network service", text_ar: "خدمة الشبكة" }, 
            { text_en: "Software service", text_ar: "خدمة البرمجيات" }, 
            { text_en: "Business service", text_ar: "خدمة الأعمال" }, 
            { text_en: "Developer service", text_ar: "خدمة المطور" }
        ], 
        correctAnswer: "C",
        explanation_en: "In Service-Oriented Architecture (SOA), services are referred to as business services.",
        explanation_ar: "في هندسة الخدمات الموجهة (SOA)، يُشار إلى الخدمات باسم خدمات الأعمال."
    },
    { 
        question_en: "SLA stands for ______", 
        question_ar: "SLA تعني ______", 
        options: [
            { text_en: "System local area", text_ar: "منطقة النظام المحلية" }, 
            { text_en: "Service local area", text_ar: "منطقة الخدمة المحلية" }, 
            { text_en: "System-level argument", text_ar: "وسيط مستوى النظام" }, 
            { text_en: "Service level argument", text_ar: "اتفاقية مستوى الخدمة" }
        ], 
        correctAnswer: "D",
        explanation_en: "SLA stands for Service Level Agreement, which defines the level of service expected.",
        explanation_ar: "SLA تعني اتفاقية مستوى الخدمة، والتي تحدد مستوى الخدمة المتوقع."
    },
    { 
        question_en: "The frequency rate of the z-wave is?", 
        question_ar: "ما هو معدل تردد z-wave؟", 
        options: [
            { text_en: "708.49 GHz", text_ar: "708.49 جيجاهيرتز" }, 
            { text_en: "888.42 GHz", text_ar: "888.42 جيجاهيرتز" }, 
            { text_en: "908.42 GHz", text_ar: "908.42 جيجاهيرتز" }, 
            { text_en: "928.49 GHz", text_ar: "928.49 جيجاهيرتز" }
        ], 
        correctAnswer: "C",
        explanation_en: "Z-Wave operates at a frequency of 908.42 MHz.",
        explanation_ar: "يعمل Z-Wave بتردد 908.42 ميجاهيرتز."
    },
    { 
        question_en: "The purpose of WoT(Web of Things) is?", 
        question_ar: "الغرض من WoT (شبكة الأشياء) هو؟", 
        options: [
            { text_en: "Reduce security", text_ar: "تقليل الأمان" }, 
            { text_en: "Increase cost", text_ar: "زيادة التكلفة" }, 
            { text_en: "Complexing development", text_ar: "تعقيد التطوير" }, 
            { text_en: "Improve usability and interoperability", text_ar: "تحسين إمكانية الاستخدام والتشغيل البيني" }
        ], 
        correctAnswer: "D",
        explanation_en: "WoT aims to enhance usability and interoperability of IoT devices using web standards.",
        explanation_ar: "تهدف WoT إلى تعزيز إمكانية الاستخدام والتشغيل البيني لأجهزة إنترنت الأشياء باستخدام معايير الويب."
    },
    { 
        question_en: "The standard length of the MAC address is", 
        question_ar: "الطول القياسي لعنوان MAC هو", 
        options: [
            { text_en: "16 bits", text_ar: "16 بت" }, 
            { text_en: "48 bits", text_ar: "48 بت" }, 
            { text_en: "32 bits", text_ar: "32 بت" }, 
            { text_en: "8 bits", text_ar: "8 بت" }
        ], 
        correctAnswer: "B",
        explanation_en: "A standard MAC address is 48 bits (6 bytes) long.",
        explanation_ar: "عنوان MAC القياسي هو 48 بت (6 بايت) طويل."
    },
    { 
        question_en: "The standard port number of secure MQTT is", 
        question_ar: "رقم المنفذ القياسي لـ MQTT الآمن هو", 
        options: [
            { text_en: "8000", text_ar: "8000" }, 
            { text_en: "8888", text_ar: "8888" }, 
            { text_en: "1883", text_ar: "1883" }, 
            { text_en: "8883", text_ar: "8883" }
        ], 
        correctAnswer: "D",
        explanation_en: "Secure MQTT (MQTT over SSL/TLS) uses port 8883.",
        explanation_ar: "يستخدم MQTT الآمن (MQTT عبر SSL/TLS) المنفذ 8883."
    },
    { 
        question_en: "The term IoT was coined in?", 
        question_ar: "تم صياغة مصطلح إنترنت الأشياء في؟", 
        options: [
            { text_en: "2000", text_ar: "2000" }, 
            { text_en: "1999", text_ar: "1999" }, 
            { text_en: "1998", text_ar: "1998" }, 
            { text_en: "2001", text_ar: "2001" }
        ], 
        correctAnswer: "B",
        explanation_en: "The term 'Internet of Things' was coined by Kevin Ashton in 1999.",
        explanation_ar: "تم صياغة مصطلح 'إنترنت الأشياء' من قبل كيفن أشتون في عام 1999."
    },
    { 
        question_en: "Through API, ______ service portability is enabled.", 
        question_ar: "من خلال واجهة برمجة التطبيقات، يتم تمكين إمكانية نقل ______ الخدمة.", 
        options: [
            { text_en: "device", text_ar: "الجهاز" }, 
            { text_en: "network", text_ar: "الشبكة" }, 
            { text_en: "services", text_ar: "الخدمات" }, 
            { text_en: "systems", text_ar: "الأنظمة" }
        ], 
        correctAnswer: "C",
        explanation_en: "APIs enable service portability across different platforms.",
        explanation_ar: "تمكن واجهات برمجة التطبيقات إمكانية نقل الخدمات عبر منصات مختلفة."
    },
    { 
        question_en: "ITS stands for ______", 
        question_ar: "ITS تعني ______", 
        options: [
            { text_en: "Internet travel services", text_ar: "خدمات السفر عبر الإنترنت" }, 
            { text_en: "Intelligent transportation security", text_ar: "أمان النقل الذكي" }, 
            { text_en: "Intelligent transportation services", text_ar: "خدمات النقل الذكية" }, 
            { text_en: "Internet transport security", text_ar: "أمان نقل الإنترنت" }
        ], 
        correctAnswer: "C",
        explanation_en: "ITS refers to Intelligent Transportation Services.",
        explanation_ar: "ITS تشير إلى خدمات النقل الذكية."
    },
    { 
        question_en: "Total elements in the Open IoT Architecture is _____", 
        question_ar: "إجمالي العناصر في بنية Open IoT هو _____", 
        options: [
            { text_en: "5", text_ar: "5" }, 
            { text_en: "6", text_ar: "6" }, 
            { text_en: "7", text_ar: "7" }, 
            { text_en: "8", text_ar: "8" }
        ], 
        correctAnswer: "C",
        explanation_en: "The Open IoT Architecture consists of 7 core elements.",
        explanation_ar: "تتكون بنية Open IoT من 7 عناصر أساسية."
    },
    { 
        question_en: "Total types in which IoT platform is divided.", 
        question_ar: "إجمالي الأنواع التي تنقسم إليها منصة إنترنت الأشياء.", 
        options: [
            { text_en: "4", text_ar: "4" }, 
            { text_en: "3", text_ar: "3" }, 
            { text_en: "5", text_ar: "5" }, 
            { text_en: "2", text_ar: "2" }
        ], 
        correctAnswer: "B",
        explanation_en: "IoT platforms are generally divided into 3 types: Consumer, Enterprise, and Industrial.",
        explanation_ar: "تنقسم منصات إنترنت الأشياء بشكل عام إلى 3 أنواع: الاستهلاكية، المؤسسية، والصناعية."
    },
    { 
        question_en: "Total types of capacitive touch sensors are", 
        question_ar: "إجمالي أنواع مستشعرات اللمس السعوية هي", 
        options: [
            { text_en: "2", text_ar: "2" }, 
            { text_en: "3", text_ar: "3" }, 
            { text_en: "4", text_ar: "4" }, 
            { text_en: "5", text_ar: "5" }
        ], 
        correctAnswer: "A",
        explanation_en: "There are 2 main types of capacitive touch sensors.",
        explanation_ar: "هناك اثنين أنواع رئيسية من مستشعرات اللمس السعوية."
    },
    { 
        question_en: "Total types of voice communications in IoT environment is?", 
        question_ar: "إجمالي أنواع الاتصالات الصوتية في بيئة إنترنت الأشياء هو؟", 
        options: [
            { text_en: "1", text_ar: "1" }, 
            { text_en: "2", text_ar: "2" }, 
            { text_en: "3", text_ar: "3" }, 
            { text_en: "4", text_ar: "4" }
        ], 
        correctAnswer: "B",
        explanation_en: "Voice communication in IoT can be classified into two types: unidirectional and bidirectional.",
        explanation_ar: "يمكن تصنيف الاتصال الصوتي في إنترنت الأشياء إلى نوعين: أحادي الاتجاه وثنائي الاتجاه."
    },
    { 
        question_en: "VNC stands for ______", 
        question_ar: "VNC تعني ______", 
        options: [
            { text_en: "Virtual network communication", text_ar: "الاتصال الشبكي الافتراضي" }, 
            { text_en: "Virtual network computing", text_ar: "الحوسبة الشبكية الافتراضية" }, 
            { text_en: "Virtual network computers", text_ar: "أجهزة الكمبيوتر الشبكية الافتراضية" }, 
            { text_en: "None", text_ar: "لا شيء" }
        ], 
        correctAnswer: "B",
        explanation_en: "VNC stands for Virtual Network Computing.",
        explanation_ar: "VNC تعني الحوسبة الشبكية الافتراضية."
    },
    { 
        question_en: "What role of the cloud in smart grid architecture is?", 
        question_ar: "ما هو دور السحابة في بنية الشبكة الذكية؟", 
        options: [
            { text_en: "Collect data", text_ar: "جمع البيانات" }, 
            { text_en: "Manage data", text_ar: "إدارة البيانات" }, 
            { text_en: "Security", text_ar: "الأمان" }, 
            { text_en: "Store data", text_ar: "تخزين البيانات" }
        ], 
        correctAnswer: "B",
        explanation_en: "The cloud primarily manages data in smart grid architecture.",
        explanation_ar: "تدير السحابة البيانات بشكل أساسي في بنية الشبكة الذكية."
    },
    { 
        question_en: "Which of the following allows to monitor the application", 
        question_ar: "أي من التالي يسمح بمراقبة التطبيق", 
        options: [
            { text_en: "boot", text_ar: "الإقلاع" }, 
            { text_en: "hypermedia", text_ar: "الوسائط الفائقة" }, 
            { text_en: "actuators", text_ar: "المشغلات" }, 
            { text_en: "endpoints", text_ar: "نقاط النهاية" }
        ], 
        correctAnswer: "D",
        explanation_en: "Endpoints are used to monitor applications in IoT.",
        explanation_ar: "تُستخدم نقاط النهاية لمراقبة التطبيقات في إنترنت الأشياء."
    },
    { 
        question_en: "Which of the following API allows the user to control electronic components.", 
        question_ar: "أي من واجهات برمجة التطبيقات التالية تسمح للمستخدم بالتحكم في المكونات الإلكترونية.", 
        options: [
            { text_en: "CoAP API", text_ar: "واجهة CoAP" }, 
            { text_en: "MQTT API", text_ar: "واجهة MQTT" }, 
            { text_en: "RETful API", text_ar: "واجهة RETful" }, 
            { text_en: "Android API", text_ar: "واجهة أندرويد" }
        ], 
        correctAnswer: "C",
        explanation_en: "RETful APIs are commonly used to control electronic components in IoT.",
        explanation_ar: "تُستخدم واجهات RETful بشكل شائع للتحكم في المكونات الإلكترونية في إنترنت الأشياء."
    },
    { 
        question_en: "Which of the following IoT gateway must provide?", 
        question_ar: "أي من التالي يجب أن توفره بوابة إنترنت الأشياء؟", 
        options: [
            { text_en: "Protocol abstraction", text_ar: "تجميع البروتوكولات" }, 
            { text_en: "Security with hardware", text_ar: "الأمان مع الأجهزة" }, 
            { text_en: "Simple and fast installation", text_ar: "التثبيت البسيط والسريع" }, 
            { text_en: "Data storage", text_ar: "تخزين البيانات" }
        ], 
        correctAnswer: "A",
        explanation_en: "An IoT gateway must provide protocol abstraction to enable communication between different protocols.",
        explanation_ar: "يجب أن توفر بوابة إنترنت الأشياء تجميع البروتوكولات لتمكين الاتصال بين البروتوكولات المختلفة."
    },
    { 
        question_en: "Who coined the term IoT?", 
        question_ar: "من صاغ مصطلح إنترنت الأشياء؟", 
        options: [
            { text_en: "IBM", text_ar: "آي بي إم" }, 
            { text_en: "Kevin Ashton", text_ar: "كيفن أشتون" }, 
            { text_en: "Ross Ihaka", text_ar: "روس إيهاكا" }, 
            { text_en: "Guido van Rossum", text_ar: "غيدو فان روسم" }
        ], 
        correctAnswer: "B",
        explanation_en: "Kevin Ashton coined the term 'Internet of Things' in 1999.",
        explanation_ar: "صاغ كيفن أشتون مصطلح 'إنترنت الأشياء' في عام 1999."
    },
    { 
        question_en: "Who operates the core element?", 
        question_ar: "من يدير العنصر الأساسي؟", 
        options: [
            { text_en: "PaaS", text_ar: "PaaS" }, 
            { text_en: "IaaS", text_ar: "IaaS" }, 
            { text_en: "IoT service provider", text_ar: "مزود خدمة إنترنت الأشياء" }, 
            { text_en: "SaaS", text_ar: "SaaS" }
        ], 
        correctAnswer: "C",
        explanation_en: "The core element of an IoT system is operated by the IoT service provider.",
        explanation_ar: "يتم تشغيل العنصر الأساسي لنظام إنترنت الأشياء بواسطة مزود خدمة إنترنت الأشياء."
    },
    { 
        question_en: "Identify the java extension file in IoT.", 
        question_ar: "حدد امتداد ملف الجافا في إنترنت الأشياء.", 
        options: [
            { text_en: ".c", text_ar: ".c" }, 
            { text_en: ".py", text_ar: ".py" }, 
            { text_en: ".exe", text_ar: ".exe" }, 
            { text_en: ".jar", text_ar: ".jar" }
        ], 
        correctAnswer: "D",
        explanation_en: "Java Archive (JAR) files are used in Java-based IoT applications.",
        explanation_ar: "تُستخدم ملفات أرشيف الجافا (JAR) في تطبيقات إنترنت الأشياء القائمة على الجافا."
    },
    { 
        question_en: "Among the following, identify which is a type of SPI controller.", 
        question_ar: "من بين التالي، حدد أي منها هو نوع من وحدة تحكم SPI.", 
        options: [
            { text_en: "Data SPI", text_ar: "SPI البيانات" }, 
            { text_en: "Queued SPI", text_ar: "SPI قائمة الانتظار" }, 
            { text_en: "Microwire", text_ar: "مايكروواير" }, 
            { text_en: "Microwire or Plus", text_ar: "مايكروواير أو بلس" }
        ], 
        correctAnswer: "B",
        explanation_en: "Queued is a type of SPI (Serial Peripheral Interface) controller.",
        explanation_ar: "قائمة الانتظار هو نوع من وحدة تحكم SPI (واجهة الطرفية التسلسلية)."
    },
    { 
        question_en: "Arduino IDE is written in which programming language", 
        question_ar: "بيئة تطوير اردوينو مكتوبة بأي لغة برمجة", 
        options: [
            { text_en: "Java", text_ar: "جافا" }, 
            { text_en: "C/C++", text_ar: "C/C++" }, 
            { text_en: "JavaScript", text_ar: "جافا سكريبت" }, 
            { text_en: "Python", text_ar: "بايثون" }
        ], 
        correctAnswer: "B",
        explanation_en: "The Arduino Integrated Development Environment (IDE) is written in C/C++.",
        explanation_ar: "بيئة تطوير اردوينو المتكاملة (IDE) مكتوبة بلغة C/C++."
    },
    { 
        question_en: "Arduino UNO is?", 
        question_ar: "اردوينو UNO هو؟", 
        options: [
            { text_en: "Protocol", text_ar: "بروتوكول" }, 
            { text_en: "Network", text_ar: "شبكة" }, 
            { text_en: "Software", text_ar: "برنامج" }, 
            { text_en: "Hardware device", text_ar: "جهاز مادي" }
        ], 
        correctAnswer: "D",
        explanation_en: "Arduino UNO is a microcontroller board, i.e., a hardware device.",
        explanation_ar: "اردوينو UNO هو لوحة متحكم دقيق، أي جهاز مادي."
    },
    { 
        question_en: "DHCP uses which transport layer protocol.", 
        question_ar: "يستخدم DHCP أي بروتوكول طبقة النقل.", 
        options: [
            { text_en: "TCP", text_ar: "TCP" }, 
            { text_en: "UDP", text_ar: "UDP" }, 
            { text_en: "RSVP", text_ar: "RSVP" }, 
            { text_en: "DCCP", text_ar: "DCCP" }
        ], 
        correctAnswer: "B",
        explanation_en: "DHCP uses UDP for communication.",
        explanation_ar: "يستخدم DHCP بروتوكول UDP للاتصال."
    },
    { 
        question_en: "Full form of SBC is?", 
        question_ar: "النموذج الكامل لـ SBC هو؟", 
        options: [
            { text_en: "Standard business center", text_ar: "مركز الأعمال القياسي" }, 
            { text_en: "Smart business center", text_ar: "مركز الأعمال الذكي" }, 
            { text_en: "Standard building center", text_ar: "مركز البناء القياسي" }, 
            { text_en: "Smart building center", text_ar: "مركز المباني الذكية" }
        ], 
        correctAnswer: "B",
        explanation_en: "SBC stands for Smart business center in the context of IoT.",
        explanation_ar: "SBC تعني مركز الاعمال الذكي في سياق إنترنت الأشياء."
    },
    { 
        question_en: "I2C stands for ______", 
        question_ar: "I2C تعني ______", 
        options: [
            { text_en: "Internet Integrated Communication", text_ar: "الاتصال المتكامل للإنترنت" }, 
            { text_en: "Inter-Integrated Communication", text_ar: "الاتصال المتكامل بين الدوائر" }, 
            { text_en: "Integrated Internet Communication", text_ar: "الاتصال المتكامل للإنترنت" }, 
            { text_en: "Internet Instigate Communication", text_ar: "الاتصال المحفز للإنترنت" }
        ], 
        correctAnswer: "B",
        explanation_en: "I2C stands for Inter-Integrated Circuit, a serial communication protocol.",
        explanation_ar: "I2C تعني الدائرة المتكاملة بين الدوائر، وهو بروتوكول اتصال تسلسلي."
    },
    { 
        question_en: "IaaS stands for ______", 
        question_ar: "IaaS تعني ______", 
        options: [
            { text_en: "Internet as a Service", text_ar: "الإنترنت كخدمة" }, 
            { text_en: "Infrastructure as a Service", text_ar: "البنية التحتية كخدمة" }, 
            { text_en: "Internet as a Software", text_ar: "الإنترنت كبرنامج" }, 
            { text_en: "Infrastructure as a Software", text_ar: "البنية التحتية كبرنامج" }
        ], 
        correctAnswer: "B",
        explanation_en: "IaaS stands for Infrastructure as a Service.",
        explanation_ar: "IaaS تعني البنية التحتية كخدمة."
    },
    { 
        question_en: "Identify among the following which is not a data link layer technology.", 
        question_ar: "حدد من بين التالي ما ليس تقنية طبقة ربط البيانات.", 
        options: [
            { text_en: "UART", text_ar: "UART" }, 
            { text_en: "WiFi", text_ar: "واي فاي" }, 
            { text_en: "Bluetooth", text_ar: "بلوتوث" }, 
            { text_en: "HTTP", text_ar: "HTTP" }
        ], 
        correctAnswer: "D",
        explanation_en: "HTTP is an application layer protocol, not a data link layer technology.",
        explanation_ar: "HTTP هو بروتوكول طبقة التطبيق، وليس تقنية طبقة ربط البيانات."
    },
    { 
        question_en: "Identify among the following which is not a fundamental component of IoT system.", 
        question_ar: "حدد من بين التالي ما ليس مكونًا أساسيًا لنظام إنترنت الأشياء.", 
        options: [
            { text_en: "User interface", text_ar: "واجهة المستخدم" }, 
            { text_en: "Sensors", text_ar: "أجهزة الاستشعار" }, 
            { text_en: "Transformers", text_ar: "المحولات" }, 
            { text_en: "Connectivity and data processing", text_ar: "الاتصال ومعالجة البيانات" }
        ], 
        correctAnswer: "C",
        explanation_en: "Transformers are not a fundamental component of an IoT system.",
        explanation_ar: "المحولات ليست مكونًا أساسيًا لنظام إنترنت الأشياء."
    },
    { 
        question_en: "Identify among the following which is not an IoT platform.", 
        question_ar: "حدد من بين التالي ما ليس منصة إنترنت أشياء.", 
        options: [
            { text_en: "Salesforce", text_ar: "سيلزفورس" }, 
            { text_en: "AWS", text_ar: "AWS" }, 
            { text_en: "Microsoft Azure", text_ar: "مايكروسوفت أزور" }, 
            { text_en: "Flipkart", text_ar: "فليبكارت" }
        ], 
        correctAnswer: "D",
        explanation_en: "Flipkart is an e-commerce platform, not an IoT platform.",
        explanation_ar: "فليبكارت هو منصة تجارة إلكترونية، وليس منصة إنترنت أشياء."
    },
    { 
        question_en: "Identify the incorrect advantage of IoT.", 
        question_ar: "حدد الميزة غير الصحيحة لإنترنت الأشياء.", 
        options: [
            { text_en: "Reduce waste", text_ar: "تقليل الهدر" }, 
            { text_en: "Enhanced data collection", text_ar: "تعزيز جمع البيانات" }, 
            { text_en: "Improve customer engagement", text_ar: "تحسين مشاركة العملاء" }, 
            { text_en: "Security", text_ar: "الأمان" }
        ], 
        correctAnswer: "D",
        explanation_en: "Security is a challenge, not an advantage, of IoT.",
        explanation_ar: "الأمان هو تحدي، وليس ميزة، لإنترنت الأشياء."
    },
    { 
        question_en: "Among the following layers, identify the one which is used for wireless connection in IoT devices.", 
        question_ar: "من بين الطبقات التالية، حدد الطبقة التي تُستخدم للاتصال اللاسلكي في أجهزة إنترنت الأشياء.", 
        options: [
            { text_en: "Data link layer", text_ar: "طبقة ربط البيانات" }, 
            { text_en: "Transport layer", text_ar: "طبقة النقل" }, 
            { text_en: "Network layer", text_ar: "طبقة الشبكة" }, 
            { text_en: "Application layer", text_ar: "طبقة التطبيق" }
        ], 
        correctAnswer: "A",
        explanation_en: "The data link layer handles wireless connections like WiFi and Bluetooth.",
        explanation_ar: "تتعامل طبقة ربط البيانات مع الاتصالات اللاسلكية مثل الواي فاي والبلوتوث."
    },
    { 
        question_en: "Identify the language preferred for IoT analytics.", 
        question_ar: "حدد اللغة المفضلة لتحليلات إنترنت الأشياء.", 
        options: [
            { text_en: "Python", text_ar: "بايثون" }, 
            { text_en: "HTML", text_ar: "HTML" }, 
            { text_en: "PHP", text_ar: "PHP" }, 
            { text_en: "C++", text_ar: "C++" }
        ], 
        correctAnswer: "A",
        explanation_en: "Python is widely used for IoT analytics due to its simplicity and rich libraries.",
        explanation_ar: "تُستخدم بايثون على نطاق واسع لتحليلات إنترنت الأشياء بسبب بساطتها ومكتباتها الغنية."
    },
    { 
        question_en: "Identify the layer which is described as the port layer in the OSI model.", 
        question_ar: "حدد الطبقة التي توصف بأنها طبقة المنفذ في نموذج OSI.", 
        options: [
            { text_en: "Application", text_ar: "التطبيق" }, 
            { text_en: "Transport", text_ar: "النقل" }, 
            { text_en: "Session", text_ar: "الجلسة" }, 
            { text_en: "Presentation", text_ar: "العرض" }
        ], 
        correctAnswer: "C",
        explanation_en: "The session layer is often referred to as the port layer.",
        explanation_ar: "يُشار إلى طبقة الجلسة غالبًا باسم طبقة المنفذ."
    },
    { 
        question_en: "Identify the lightweight protocol.", 
        question_ar: "حدد البروتوكول خفيف الوزن.", 
        options: [
            { text_en: "HTTP", text_ar: "HTTP" }, 
            { text_en: "MQTT", text_ar: "MQTT" }, 
            { text_en: "CoAP", text_ar: "CoAP" }, 
            { text_en: "IP", text_ar: "IP" }
        ], 
        correctAnswer: "B",
        explanation_en: "MQTT is a lightweight messaging protocol designed for IoT.",
        explanation_ar: "MQTT هو بروتوكول مراسلة خفيف الوزن مصمم لإنترنت الأشياء."
    },
    { 
        question_en: "Identify the one which is not a networking device.", 
        question_ar: "حدد الجهاز الذي ليس جهاز شبكة.", 
        options: [
            { text_en: "Switch", text_ar: "المحول" }, 
            { text_en: "Traffic analyzer", text_ar: "محلل حركة المرور" }, 
            { text_en: "Bridge", text_ar: "الجسر" }, 
            { text_en: "Router", text_ar: "الموجه" }
        ], 
        correctAnswer: "B",
        explanation_en: "A traffic analyzer is a tool, not a networking device.",
        explanation_ar: "محلل حركة المرور هو أداة، وليس جهاز شبكة."
    },
    { 
        question_en: "Identify the protocol used to link all devices in IoT,", 
        question_ar: "حدد البروتوكول المستخدم لربط جميع الأجهزة في إنترنت الأشياء,", 
        options: [
            { text_en: "UDP", text_ar: "UDP" }, 
            { text_en: "TCP/IP", text_ar: "TCP/IP" }, 
            { text_en: "HTTP", text_ar: "HTTP" }, 
            { text_en: "Network", text_ar: "الشبكة" }
        ], 
        correctAnswer: "B",
        explanation_en: "TCP/IP is the foundational protocol suite for connecting IoT devices.",
        explanation_ar: "TCP/IP هي مجموعة البروتوكولات الأساسية لربط أجهزة إنترنت الأشياء."
    },
    { 
        question_en: "Identify the service which permits the changes to IoT services.", 
        question_ar: "حدد الخدمة التي تسمح بالتغييرات في خدمات إنترنت الأشياء.", 
        options: [
            { text_en: "Enable", text_ar: "تمكين" }, 
            { text_en: "Enable from suspension", text_ar: "تمكين من التعليق" }, 
            { text_en: "Update", text_ar: "تحديث" }, 
            { text_en: "Registered service status", text_ar: "حالة الخدمة المسجلة" }
        ], 
        correctAnswer: "C",
        explanation_en: "The Update service allows changes to IoT services.",
        explanation_ar: "تسمح خدمة التحديث بإجراء تغييرات على خدمات إنترنت الأشياء."
    },
    { 
        question_en: "Identify the shortest range IoT network.", 
        question_ar: "حدد شبكة إنترنت الأشياء ذات المدى الأقصر.", 
        options: [
            { text_en: "SigFox", text_ar: "سيج فوكس" }, 
            { text_en: "LPWAN", text_ar: "LPWAN" }, 
            { text_en: "Short-range wireless network", text_ar: "شبكة لاسلكية قصيرة المدى" }, 
            { text_en: "Short network", text_ar: "شبكة قصيرة" }
        ], 
        correctAnswer: "C",
        explanation_en: "Short-range wireless networks like Bluetooth have the shortest range.",
        explanation_ar: "الشبكات اللاسلكية قصيرة المدى مثل البلوتوث لها أقصر مدى."
    },
    { 
        question_en: "IIoT stands for ______.", 
        question_ar: "IIoT تعني ______.", 
        options: [
            { text_en: "Intense Internet of Things", text_ar: "إنترنت الأشياء المكثف" }, 
            { text_en: "Index Internet of Technology", text_ar: "فهرس إنترنت التكنولوجيا" }, 
            { text_en: "Industrial Internet of Things", text_ar: "إنترنت الأشياء الصناعي" }, 
            { text_en: "Incorporate Internet of Technology", text_ar: "دمج إنترنت التكنولوجيا" }
        ], 
        correctAnswer: "C",
        explanation_en: "IIoT stands for Industrial Internet of Things.",
        explanation_ar: "IIoT تعني إنترنت الأشياء الصناعي."
    },
    { 
        question_en: "In which of the following terms in resolution expressed?", 
        question_ar: "بأي من المصطلحات التالية يتم التعبير عن الدقة؟", 
        options: [
            { text_en: "bits", text_ar: "بت" }, 
            { text_en: "bytes", text_ar: "بايت" }, 
            { text_en: "nibble", text_ar: "نيبل" }, 
            { text_en: "word", text_ar: "كلمة" }
        ], 
        correctAnswer: "A",
        explanation_en: "Resolution is often expressed in bits (e.g., image resolution).",
        explanation_ar: "غالبًا ما يتم التعبير عن الدقة بالبت (مثل دقة الصورة)."
    },
    { 
        question_en: "IoT stands for ______", 
        question_ar: "IoT تعني ______", 
        options: [
            { text_en: "Internet of Things", text_ar: "إنترنت الأشياء" }, 
            { text_en: "Internet of Technology", text_ar: "إنترنت التكنولوجيا" }, 
            { text_en: "Incorporate of Things", text_ar: "دمج الأشياء" }, 
            { text_en: "Incorporate of Technology", text_ar: "دمج التكنولوجيا" }
        ], 
        correctAnswer: "A",
        explanation_en: "IoT stands for Internet of Things.",
        explanation_ar: "IoT تعني إنترنت الأشياء."
    }
    // يمكنك إضافة المزيد من الأسئلة هنا
];