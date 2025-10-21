// مجموعة أسئلة
var quizData = [
    { 
        question_en: "Which of the following is the java extension file in IoT?", 
        question_ar: "أي مما يلي هو امتداد ملف الجافا في إنترنت الأشياء؟", 
        options: [
            { text_en: ".exe", text_ar: ".exe" }, 
            { text_en: ".py", text_ar: ".py" }, 
            { text_en: ".c", text_ar: ".c" }, 
            { text_en: ".jar", text_ar: ".jar" }
        ], 
        correctAnswer: "D",
        explanation_en: "In Java, compiled classes and libraries are packaged into a .jar (Java Archive) file, which is widely used in IoT applications running on Java-supported platforms.",
        explanation_ar: "في الجافا، يتم حزم الفئات والمكتبات المترجمة في ملف .jar (أرشيف الجافا)، والذي يستخدم على نطاق واسع في تطبيقات إنترنت الأشياء التي تعمل على منصات تدعم الجافا."
    },
    { 
        question_en: "Which of the following class handles Publishing messages?", 
        question_ar: "أي من الفئات التالية تعالج نشر الرسائل؟", 
        options: [
            { text_en: "Publish()", text_ar: "Publish()" }, 
            { text_en: "Server()", text_ar: "Server()" }, 
            { text_en: "Client()", text_ar: "Client()" }, 
            { text_en: "Batch()", text_ar: "Batch()" }
        ], 
        correctAnswer: "C",
        explanation_en: "In IoT messaging systems like MQTT, the Client class is responsible for publishing messages to topics and subscribing to receive messages from topics.",
        explanation_ar: "في أنظمة مراسلة إنترنت الأشياء مثل MQTT، تكون فئة Client مسؤولة عن نشر الرسائل إلى المواضيع والاشتراك لتلقي الرسائل من المواضيع."
    },
    { 
        question_en: "What is the full form of IaaS?", 
        question_ar: "ما هو النموذج الكامل لـ IaaS؟", 
        options: [
            { text_en: "Internet as a Software", text_ar: "الإنترنت كبرنامج" }, 
            { text_en: "Internet as a Service", text_ar: "الإنترنت كخدمة" }, 
            { text_en: "Infrastructure as a Software", text_ar: "البنية التحتية كبرنامج" }, 
            { text_en: "Infrastructure as a Service", text_ar: "البنية التحتية كخدمة" }
        ], 
        correctAnswer: "D",
        explanation_en: "IaaS stands for Infrastructure as a Service, a cloud computing model that provides virtualized computing resources over the internet.",
        explanation_ar: "IaaS تعني البنية التحتية كخدمة، وهي نموذج للحوسبة السحابية يوفر موارد حوسبة افتراضية عبر الإنترنت."
    },
    { 
        question_en: "What is the minimum value which an application shall exceed to be offloaded?", 
        question_ar: "ما هي القيمة الدنيا التي يجب أن يتجاوزها التطبيق ليتم تفريغه؟", 
        options: [
            { text_en: "Static value", text_ar: "قيمة ثابتة" }, 
            { text_en: "Threshold value", text_ar: "قيمة العتبة" }, 
            { text_en: "Dynamic value", text_ar: "قيمة ديناميكية" }, 
            { text_en: "Critical value", text_ar: "قيمة حرجة" }
        ], 
        correctAnswer: "B",
        explanation_en: "Offloading decisions in IoT are often based on a threshold value that, when exceeded, triggers the offloading process to optimize performance or energy usage.",
        explanation_ar: "قرارات التفريغ في إنترنت الأشياء تعتمد غالبًا على قيمة عتبة، عند تجاوزها، يتم تشغيل عملية التفريغ لتحسين الأداء أو استخدام الطاقة."
    },
    { 
        question_en: "Which of the following process has to support the definition of application in various formats?", 
        question_ar: "أي من العمليات التالية يجب أن تدعم تعريف التطبيق بتنسيقات مختلفة؟", 
        options: [
            { text_en: "Top-down and bottom-up", text_ar: "من الأعلى إلى الأسفل ومن الأسفل إلى الأعلى" }, 
            { text_en: "Management and Configuration", text_ar: "الإدارة والتكوين" }, 
            { text_en: "Enrichment of Topology specification", text_ar: "إثراء مواصفات الطوبولوجيا" }, 
            { text_en: "Support of different Migration types", text_ar: "دعم أنواع الهجرة المختلفة" }
        ], 
        correctAnswer: "C",
        explanation_en: "Enrichment of topology specification involves defining applications in multiple formats to support interoperability and flexible deployment in IoT systems.",
        explanation_ar: "يتضمن إثراء مواصفات الطوبولوجيا تعريف التطبيقات بتنسيقات متعددة لدعم التوافقية والنشر المرن في أنظمة إنترنت الأشياء."
    },
    { 
        question_en: "Software that address the data protection is divided into", 
        question_ar: "البرنامج الذي يتعامل مع حماية البيانات مقسم إلى", 
        options: [
            { text_en: "1 segment", text_ar: "قطعة واحدة" }, 
            { text_en: "2 segments", text_ar: "قطعتين" }, 
            { text_en: "3 segments", text_ar: "ثلاث قطع" }, 
            { text_en: "4 segments", text_ar: "أربع قطع" }
        ], 
        correctAnswer: "C",
        explanation_en: "Data protection software in IoT is typically divided into three segments: security for data at rest, data in transit, and data in processing.",
        explanation_ar: "عادة ما ينقسم برنامج حماية البيانات في إنترنت الأشياء إلى ثلاثة أقسام: الأمان للبيانات المخزنة والبيانات أثناء النقل والبيانات أثناء المعالجة."
    },
    { 
        question_en: "......types of voice communications are in IoT environment.", 
        question_ar: "...... أنواع اتصالات الصوت موجودة في بيئة إنترنت الأشياء.", 
        options: [
            { text_en: "2", text_ar: "2" }, 
            { text_en: "3", text_ar: "3" }, 
            { text_en: "4", text_ar: "4" }, 
            { text_en: "5", text_ar: "5" }
        ], 
        correctAnswer: "B",
        explanation_en: "In IoT, voice communication is generally categorized into three types: human-to-machine, machine-to-machine, and hybrid voice interactions.",
        explanation_ar: "في إنترنت الأشياء، يتم تصنيف اتصال الصوت عمومًا إلى ثلاثة أنواع: التفاعلات الصوتية بين الإنسان والآلة وبين الآلة والآلة والتفاعلات الهجينة."
    },
    { 
        question_en: "IoT devices can easily lead to catastrophe without.", 
        question_ar: "يمكن أن تؤدي أجهزة إنترنت الأشياء بسهولة إلى كارثة بدون.", 
        options: [
            { text_en: "Software", text_ar: "البرنامج" }, 
            { text_en: "Devices", text_ar: "الأجهزة" }, 
            { text_en: "Cloud", text_ar: "السحابة" }, 
            { text_en: "Management system", text_ar: "نظام الإدارة" }
        ], 
        correctAnswer: "D",
        explanation_en: "Without a proper management system, IoT devices can become unmonitored, unsecured, or misconfigured, leading to failures or security breaches.",
        explanation_ar: "بدون نظام إدارة مناسب، يمكن أن تصبح أجهزة إنترنت الأشياء غير مراقبة أو غير آمنة أو ذات تكوين خاطئ، مما يؤدي إلى أعطال أو خروقات أمنية."
    },
    { 
        question_en: "Which of the following category is used for business to consumer process?", 
        question_ar: "أي من الفئات التالية تستخدم لعملية الأعمال إلى المستهلك؟", 
        options: [
            { text_en: "Group IoT", text_ar: "إنترنت الأشياء الجماعي" }, 
            { text_en: "Community IoT", text_ar: "إنترنت الأشياء المجتمعي" }, 
            { text_en: "Personal IoT", text_ar: "إنترنت الأشياء الشخصي" }, 
            { text_en: "Industrial IoT", text_ar: "إنترنت الأشياء الصناعي" }
        ], 
        correctAnswer: "C",
        explanation_en: "Personal IoT refers to devices and applications used by consumers in business-to-consumer processes, such as smart home devices, wearables, and personal health monitors.",
        explanation_ar: "يشير إنترنت الأشياء الشخصي إلى الأجهزة والتطبيقات التي يستخدمها المستهلكون في عمليات الأعمال إلى المستهلك، مثل أجهزة المنزل الذكي والأجهزة القابلة للارتداء وأجهزة مراقبة الصحة الشخصية."
    },
    { 
        question_en: "Which is the future application of IoT?", 
        question_ar: "أي مما يلي هو التطبيق المستقبلي لإنترنت الأشياء؟", 
        options: [
            { text_en: "QoS in communication", text_ar: "جودة الخدمة في الاتصال" }, 
            { text_en: "Role of green IoT system", text_ar: "دور نظام إنترنت الأشياء الأخضر" }, 
            { text_en: "Secure communication", text_ar: "الاتصال الآمن" }, 
            { text_en: "Multimedia communication", text_ar: "الاتصال متعدد الوسائط" }
        ], 
        correctAnswer: "B",
        explanation_en: "Green IoT systems focus on energy efficiency and environmental sustainability, making them a crucial future application for reducing the carbon footprint of IoT technologies.",
        explanation_ar: "تركز أنظمة إنترنت الأشياء الخضراء على كفاءة الطاقة والاستدامة البيئية، مما يجعلها تطبيقًا مستقبليًا بالغ الأهمية لتقليل البصمة الكربونية لتقنيات إنترنت الأشياء."
    },
    { 
        question_en: "Which of the following option allows us to monitor the application?", 
        question_ar: "أي من الخيارات التالية يسمح لنا بمراقبة التطبيق؟", 
        options: [
            { text_en: "Boot", text_ar: "التشغيل" }, 
            { text_en: "Endpoints", text_ar: "نقاط النهاية" }, 
            { text_en: "Actuators", text_ar: "المشغلات" }, 
            { text_en: "Hypermedia", text_ar: "الوسائط الفائقة" }
        ], 
        correctAnswer: "A",
        explanation_en: "The Boot process in IoT systems allows monitoring of applications during initialization and startup, providing crucial diagnostic information.",
        explanation_ar: "تسمح عملية التشغيل في أنظمة إنترنت الأشياء بمراقبة التطبيقات أثناء التهيئة والبدء، مما يوفر معلومات تشخيصية بالغة الأهمية."
    },
    { 
        question_en: "Which of the following is not a data link layer technology?", 
        question_ar: "أي مما يلي ليس تقنية في طبقة ربط البيانات؟", 
        options: [
            { text_en: "UART", text_ar: "UART" }, 
            { text_en: "Bluetooth", text_ar: "بلوتوث" }, 
            { text_en: "HTTP", text_ar: "HTTP" }, 
            { text_en: "WiFi", text_ar: "واي فاي" }
        ], 
        correctAnswer: "C",
        explanation_en: "HTTP is an application layer protocol, not a data link layer technology. UART, Bluetooth, and WiFi operate at the data link or physical layers.",
        explanation_ar: "HTTP هو بروتوكول طبقة التطبيق، وليس تقنية طبقة ربط البيانات. تعمل UART والبلوتوث والواي فاي في طبقات ربط البيانات أو الطبقات المادية."
    },
    { 
        question_en: "Which of the following layer is called a port layer in OSI model?", 
        question_ar: "أي من الطبقات التالية تسمى طبقة المنفذ في نموذج OSI؟", 
        options: [
            { text_en: "Application", text_ar: "التطبيق" }, 
            { text_en: "Presentation", text_ar: "العرض" }, 
            { text_en: "Session", text_ar: "الجلسة" }, 
            { text_en: "Transport", text_ar: "النقل" }
        ], 
        correctAnswer: "C",
        explanation_en: "The Session layer in the OSI model is sometimes referred to as the port layer as it establishes, manages, and terminates connections between applications.",
        explanation_ar: "طبقة الجلسة في نموذج OSI يشار إليها أحيانًا باسم طبقة المنفذ لأنها تنشئ وتدير وتنهي الاتصالات بين التطبيقات."
    },
    { 
        question_en: "Which of the following is not a networking device?", 
        question_ar: "أي مما يلي ليس جهاز شبكة؟", 
        options: [
            { text_en: "Switch", text_ar: "المحول" }, 
            { text_en: "Traffic Analyzer", text_ar: "محلل الحركة" }, 
            { text_en: "Router", text_ar: "المسير" }, 
            { text_en: "Bridge", text_ar: "الجسر" }
        ], 
        correctAnswer: "B",
        explanation_en: "A Traffic Analyzer is a tool or software used for monitoring and analyzing network traffic, not a fundamental networking device like a switch, router, or bridge.",
        explanation_ar: "محلل الحركة هو أداة أو برنامج يستخدم لمراقبة حركة الشبكة وتحليلها، وليس جهاز شبكة أساسي مثل المحول أو المسير أو الجسر."
    },
    { 
        question_en: "......is the standard length of MAC address?", 
        question_ar: "...... هو الطول القياسي لعنوان MAC؟", 
        options: [
            { text_en: "8 bits", text_ar: "8 بت" }, 
            { text_en: "16 bits", text_ar: "16 بت" }, 
            { text_en: "32 bits", text_ar: "32 بت" }, 
            { text_en: "48 bits", text_ar: "48 بت" }
        ], 
        correctAnswer: "D",
        explanation_en: "A MAC (Media Access Control) address is typically 48 bits long, represented as 12 hexadecimal digits.",
        explanation_ar: "عنوان MAC (التحكم في الوصول إلى الوسائط) يبلغ طوله عادة 48 بت، ممثلة كـ 12 رقم ست عشري."
    },
    { 
        question_en: "What is the full form of VNC?", 
        question_ar: "ما هو النموذج الكامل لـ VNC؟", 
        options: [
            { text_en: "Virtual Network Computing", text_ar: "الحوسبة الشبكية الافتراضية" }, 
            { text_en: "Various Network computers", text_ar: "أجهزة الكمبيوتر الشبكية المتنوعة" }, 
            { text_en: "Virtual Network Communication", text_ar: "الاتصال الشبكي الافتراضي" }, 
            { text_en: "None of the above", text_ar: "لا شيء مما سبق" }
        ], 
        correctAnswer: "A",
        explanation_en: "VNC stands for Virtual Network Computing, a graphical desktop-sharing system used for remote control of another computer.",
        explanation_ar: "VNC تعني الحوسبة الشبكية الافتراضية، وهو نظام مشاركة سطح المكتب الرسومي المستخدم للتحكم عن بعد في جهاز كمبيوتر آخر."
    },
    { 
        question_en: "Which of the following is not LPWAN technologies?", 
        question_ar: "أي مما يلي ليس من تقنيات LPWAN؟", 
        options: [
            { text_en: "SigFox", text_ar: "سيج فوكس" }, 
            { text_en: "NB-IoT", text_ar: "NB-IoT" }, 
            { text_en: "LoRa", text_ar: "لورا" }, 
            { text_en: "WiFi", text_ar: "واي فاي" }
        ], 
        correctAnswer: "D",
        explanation_en: "WiFi is a local area wireless technology and is not classified as a Low-Power Wide-Area Network (LPWAN) technology like SigFox, NB-IoT, or LoRa.",
        explanation_ar: "الواي فاي هي تقنية لاسلكية للمنطقة المحلية ولا تصنف كتقنية شبكة واسعة النطاق منخفضة الطاقة (LPWAN) مثل سيج فوكس أو NB-IoT أو لورا."
    },
    { 
        question_en: "Which language is preferred for IoT analytics?", 
        question_ar: "أي لغة مفضلة لتحليلات إنترنت الأشياء؟", 
        options: [
            { text_en: "C ++", text_ar: "سي بلاس بلاس" }, 
            { text_en: "Python", text_ar: "بايثون" }, 
            { text_en: "HTML", text_ar: "HTML" }, 
            { text_en: "PHP", text_ar: "PHP" }
        ], 
        correctAnswer: "B",
        explanation_en: "Python is widely preferred for IoT analytics due to its simplicity, rich libraries for data analysis, and strong community support.",
        explanation_ar: "تعتبر بايثون مفضلة على نطاق واسع لتحليلات إنترنت الأشياء بسبب بساطتها ومكتباتها الغنية لتحليل البيانات ودعم المجتمع القوي."
    },
    { 
        question_en: "What does CGI stands for in IOT?", 
        question_ar: "ما الذي يعنيه CGI في إنترنت الأشياء؟", 
        options: [
            { text_en: "Common Gateway Interest", text_ar: "اهتمام البوابة المشتركة" }, 
            { text_en: "Common Gateway Interface", text_ar: "واجهة البوابة المشتركة" }, 
            { text_en: "Common Gate Interference", text_ar: "تداخل البوابة المشتركة" }, 
            { text_en: "Computer Generated Imagery", text_ar: "الصور المولدة بالحاسوب" }
        ], 
        correctAnswer: "D",
        explanation_en: "In IoT context, CGI often refers to Computer Generated Imagery used in simulations, virtual reality applications, and digital twin technologies.",
        explanation_ar: "في سياق إنترنت الأشياء، يشير CGI غالبًا إلى الصور المولدة بالحاسوب المستخدمة في المحاكاة وتطبيقات الواقع الافتراضي وتقنيات التوأم الرقمي."
    },
    { 
        question_en: "Which of the following is Raspbian?", 
        question_ar: "أي مما يلي هو Raspbian؟", 
        options: [
            { text_en: "OS", text_ar: "نظام تشغيل" }, 
            { text_en: "Assembler", text_ar: "المجمّع" }, 
            { text_en: "Language", text_ar: "لغة" }, 
            { text_en: "Compiler", text_ar: "المترجم" }
        ], 
        correctAnswer: "A",
        explanation_en: "Raspbian is a Debian-based operating system optimized for the Raspberry Pi hardware, commonly used in IoT projects.",
        explanation_ar: "Raspbian هو نظام تشغيل مبني على دبيان ومحسن لأجهزة Raspberry Pi، ويستخدم عادة في مشاريع إنترنت الأشياء."
    },
    { 
        question_en: "What is the full form of IoT?", 
        question_ar: "ما هو النموذج الكامل لـ IoT؟", 
        options: [
            { text_en: "Internet of Things", text_ar: "إنترنت الأشياء" }, 
            { text_en: "Internet of Tracking", text_ar: "إنترنت التتبع" }, 
            { text_en: "Interaction of Things", text_ar: "تفاعل الأشياء" }, 
            { text_en: "None of above", text_ar: "لا شيء مما سبق" }
        ], 
        correctAnswer: "A",
        explanation_en: "IoT stands for Internet of Things, referring to the network of physical objects embedded with sensors and software for connectivity and data exchange.",
        explanation_ar: "IoT تعني إنترنت الأشياء، في إشارة إلى شبكة الأشياء المادية المضمنة بأجهزة الاستشعار والبرامج للاتصال وتبادل البيانات."
    },
    { 
        question_en: "What is the role of Gateway in smart grid architecture of IoT?", 
        question_ar: "ما هو دور البوابة في بنية الشبكة الذكية لإنترنت الأشياء؟", 
        options: [
            { text_en: "Security", text_ar: "الأمان" }, 
            { text_en: "Store data", text_ar: "تخزين البيانات" }, 
            { text_en: "Collect data", text_ar: "جمع البيانات" }, 
            { text_en: "Manage data", text_ar: "إدارة البيانات" }
        ], 
        correctAnswer: "C",
        explanation_en: "In smart grid architecture, the Gateway collects data from various sensors and devices and transmits it to the central system for processing.",
        explanation_ar: "في بنية الشبكة الذكية، تقوم البوابة بجمع البيانات من أجهزة الاستشعار والأجهزة المختلفة ونقلها إلى النظام المركزي للمعالجة."
    },
    { 
        question_en: "Which of the following is not an advantage of IoT?", 
        question_ar: "أي مما يلي ليس ميزة لإنترنت الأشياء؟", 
        options: [
            { text_en: "Security", text_ar: "الأمان" }, 
            { text_en: "Reduced Waste", text_ar: "تقليل الهدر" }, 
            { text_en: "Enhanced Data Collection", text_ar: "تعزيز جمع البيانات" }, 
            { text_en: "Improved Customer Engagement", text_ar: "تحسين مشاركة العملاء" }
        ], 
        correctAnswer: "A",
        explanation_en: "Security is often a challenge or risk in IoT systems, not an advantage. Advantages include efficiency, data collection, and customer engagement.",
        explanation_ar: "غالبًا ما يمثل الأمان تحديًا أو خطرًا في أنظمة إنترنت الأشياء، وليس ميزة. تشمل المزايا الكفاءة وجمع البيانات ومشاركة العملاء."
    },
    { 
        question_en: "The IoT platforms are mainly divided into......", 
        question_ar: "تنقسم منصات إنترنت الأشياء بشكل رئيسي إلى......", 
        options: [
            { text_en: "2 types", text_ar: "نوعين" }, 
            { text_en: "3 types", text_ar: "ثلاثة أنواع" }, 
            { text_en: "4 types", text_ar: "أربعة أنواع" }, 
            { text_en: "5 types", text_ar: "خمسة أنواع" }
        ], 
        correctAnswer: "C",
        explanation_en: "IoT platforms are generally divided into four main types: cloud-based platforms, on-premises platforms, hybrid platforms, and specialized industry-specific platforms.",
        explanation_ar: "تنقسم منصات إنترنت الأشياء عمومًا إلى أربعة أنواع رئيسية: المنصات القائمة على السحابة والمنصات المحلية والمنصات الهجينة والمنصات المتخصصة حسب الصناعة."
    },
    { 
        question_en: "The core element is operated by......", 
        question_ar: "يتم تشغيل العنصر الأساسي بواسطة......", 
        options: [
            { text_en: "IaaS", text_ar: "IaaS" }, 
            { text_en: "PaaS", text_ar: "PaaS" }, 
            { text_en: "SaaS", text_ar: "SaaS" }, 
            { text_en: "IoT service Provider", text_ar: "مزود خدمة إنترنت الأشياء" }
        ], 
        correctAnswer: "D",
        explanation_en: "The core element of an IoT system is typically operated by an IoT service provider, who manages the end-to-end services and infrastructure.",
        explanation_ar: "عادة ما يتم تشغيل العنصر الأساسي لنظام إنترنت الأشياء بواسطة مزود خدمة إنترنت الأشياء، الذي يدير الخدمات والبنية التحتية من طرف إلى طرف."
    }
    // يمكنك إضافة المزيد من الأسئلة هنا
];