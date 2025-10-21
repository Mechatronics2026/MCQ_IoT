// مجموعة أسئلة
var quizData = [
    { 
        question_en: "How many numbers of the element in the open IoT architecture?", 
        question_ar: "كم عدد العناصر في بنية إنترنت الأشياء المفتوحة؟", 
        options: [
            { text_en: "Four elements", text_ar: "أربعة عناصر" }, 
            { text_en: "Five elements", text_ar: "خمسة عناصر" }, 
            { text_en: "Six elements", text_ar: "ستة عناصر" }, 
            { text_en: "Seven elements", text_ar: "سبعة عناصر" }
        ], 
        correctAnswer: "D",
        explanation_en: "There are seven numbers of elements in the open IoT architecture: Configuration and monitoring, Cloud data storage, Scheduler, Request definition, Request presentation, Service delivery and utility manager, Sensor middleware (X-GSN).",
        explanation_ar: "هناك سبعة عناصر في بنية إنترنت الأشياء المفتوحة: التكوين والمراقبة، تخزين البيانات السحابية، الجدولة، تعريف الطلب، عرض الطلب، تقديم الخدمة ومدير المرافق، وسيط أجهزة الاستشعار (X-GSN)."
    },
    { 
        question_en: "Which of the following is the way in which an IoT device is associated with data?", 
        question_ar: "أي مما يلي هو الطريقة التي يرتبط بها جهاز إنترنت الأشياء بالبيانات؟", 
        options: [
            { text_en: "Internet", text_ar: "الإنترنت" }, 
            { text_en: "Cloud", text_ar: "السحابة" }, 
            { text_en: "Automata", text_ar: "الأتمتة" }, 
            { text_en: "Network", text_ar: "الشبكة" }
        ], 
        correctAnswer: "B",
        explanation_en: "Cloud-based services provide a way for IoT devices to be connected to data. For example: Just as the WWW (World Wide Web) runs on the Internet, so does IoT.",
        explanation_ar: "توفر الخدمات القائمة على السحابة طريقة لربط أجهزة إنترنت الأشياء بالبيانات. على سبيل المثال: كما تعمل الشبكة العنكبوتية العالمية على الإنترنت، كذلك يفعل إنترنت الأشياء."
    },
    { 
        question_en: "Which of the following IoT networks has a very short range?", 
        question_ar: "أي من شبكات إنترنت الأشياء التالية لها مدى قصير جدًا؟", 
        options: [
            { text_en: "Short Network", text_ar: "شبكة قصيرة" }, 
            { text_en: "LPWAN", text_ar: "LPWAN" }, 
            { text_en: "SigFox", text_ar: "سيج فوكس" }, 
            { text_en: "Short-range Wireless Network", text_ar: "شبكة لاسلكية قصيرة المدى" }
        ], 
        correctAnswer: "D",
        explanation_en: "Short-range Wireless Network has a very short range compared to other IoT networks.",
        explanation_ar: "الشبكة اللاسلكية قصيرة المدى لها مدى قصير جدًا مقارنة بشبكات إنترنت الأشياء الأخرى."
    },
    { 
        question_en: "What is the full form of the LPWAN?", 
        question_ar: "ما هو النموذج الكامل لـ LPWAN؟", 
        options: [
            { text_en: "Low Protocol Wide Area Network", text_ar: "شبكة المنطقة الواسعة ذات البروتوكول المنخفض" }, 
            { text_en: "Low Power Wide Area Network", text_ar: "شبكة المنطقة الواسعة منخفضة الطاقة" }, 
            { text_en: "Long Protocol Wide Area Network", text_ar: "شبكة المنطقة الواسعة ذات البروتوكول الطويل" }, 
            { text_en: "Long Power Wide Area Network", text_ar: "شبكة المنطقة الواسعة ذات الطاقة الطويلة" }
        ], 
        correctAnswer: "B",
        explanation_en: "The full form of the LPWAN is Low Power Wide Area Network. LPWAN is a type of wireless telecommunication, and it is specially designed for M2M (Machine to Machine) and IoT devices.",
        explanation_ar: "النموذج الكامل لـ LPWAN هو شبكة المنطقة الواسعة منخفضة الطاقة. LPWAN هو نوع من الاتصالات اللاسلكية، وهو مصمم خصيصًا لأجهزة M2M (آلة إلى آلة) وإنترنت الأشياء."
    },
    { 
        question_en: "An IoT network is a collection of ______ devices.", 
        question_ar: "شبكة إنترنت الأشياء هي مجموعة من الأجهزة ______.", 
        options: [
            { text_en: "Signal", text_ar: "إشارة" }, 
            { text_en: "Machine to Machine", text_ar: "آلة إلى آلة" }, 
            { text_en: "Interconnected", text_ar: "مترابطة" }, 
            { text_en: "Network to Network", text_ar: "شبكة إلى شبكة" }
        ], 
        correctAnswer: "C",
        explanation_en: "An IoT network is a collection of interconnected devices that communicate with other devices without human involvement.",
        explanation_ar: "شبكة إنترنت الأشياء هي مجموعة من الأجهزة المترابطة التي تتواصل مع أجهزة أخرى بدون تدخل بشري."
    },
    { 
        question_en: "Which one of the following is not an IoT device?", 
        question_ar: "أي مما يلي ليس جهاز إنترنت أشياء؟", 
        options: [
            { text_en: "Amazon echo voice controller", text_ar: "جهاز تحكم صوتي أمازون إيكو" }, 
            { text_en: "Google Home", text_ar: "جوجل هوم" }, 
            { text_en: "Nest Smoke Alarm", text_ar: "إنذار الدخان نيست" }, 
            { text_en: "None of these", text_ar: "لا شيء مما سبق" }
        ], 
        correctAnswer: "D",
        explanation_en: "These are all IoT devices. Google Home is a smart speaker that obeys all the commands given by the user. The Amazon Echo Voice Controller is also a smart speaker. The Nest Smoke Alarm is an IoT device that sends a smoke alert message to the user when a fire occurs.",
        explanation_ar: "هذه كلها أجهزة إنترنت أشياء. جوجل هوم هو سماعة ذكية تطيع جميع الأوامر التي يعطيها المستخدم. جهاز تحكم صوتي أمازون إيكو هو أيضًا سماعة ذكية. إنذار الدخان نيست هو جهاز إنترنت أشياء يرسل رسالة تنبيه بالدخان إلى المستخدم عند حدوث حريق."
    },
    { 
        question_en: "What is the main purpose of WoT (Web of Things) in the IoT?", 
        question_ar: "ما هو الغرض الرئيسي من ويب الأشياء (WoT) في إنترنت الأشياء؟", 
        options: [
            { text_en: "Improve the usability and interoperability", text_ar: "تحسين قابلية الاستخدام والتشغيل البيني" }, 
            { text_en: "Reduce the security", text_ar: "تقليل الأمان" }, 
            { text_en: "Complex the development", text_ar: "تعقيد التطوير" }, 
            { text_en: "Increase the cost", text_ar: "زيادة التكلفة" }
        ], 
        correctAnswer: "A",
        explanation_en: "The main purpose of the Web of Things is to improve the usability and interoperability in IoT. Developing IoT Apps through WoT is much easier, faster, and less expensive.",
        explanation_ar: "الغرض الرئيسي من ويب الأشياء هو تحسين قابلية الاستخدام والتشغيل البيني في إنترنت الأشياء. تطوير تطبيقات إنترنت الأشياء من خلال WoT أسهل وأسرع وأقل تكلفة."
    },
    { 
        question_en: "What is the Arduino UNO?", 
        question_ar: "ما هو Arduino UNO؟", 
        options: [
            { text_en: "Software", text_ar: "برنامج" }, 
            { text_en: "Hardware device", text_ar: "جهاز عتاد" }, 
            { text_en: "Network", text_ar: "شبكة" }, 
            { text_en: "Protocol", text_ar: "بروتوكول" }
        ], 
        correctAnswer: "B",
        explanation_en: "The Arduino Uno is a hardware device that is based on the Microchip ATmega328P microcontroller. It has been developed by Arduino.cc.",
        explanation_ar: "Arduino Uno هو جهاز عتاد يعتمد على متحكم Microchip ATmega328P. تم تطويره بواسطة Arduino.cc."
    },
    { 
        question_en: "______ allows the user to control electronic components.", 
        question_ar: "______ يسمح للمستخدم بالتحكم في المكونات الإلكترونية.", 
        options: [
            { text_en: "Android API", text_ar: "واجهة برمجة تطبيقات أندرويد" }, 
            { text_en: "RETful API", text_ar: "واجهة برمجة تطبيقات RESTful" }, 
            { text_en: "MQTT API", text_ar: "واجهة برمجة تطبيقات MQTT" }, 
            { text_en: "CoAP API", text_ar: "واجهة برمجة تطبيقات CoAP" }
        ], 
        correctAnswer: "B",
        explanation_en: "The RETful API allows the user to control the electronic components connected to the Intel Galileo Gen 2 board via HTTP requests.",
        explanation_ar: "تسمح واجهة برمجة تطبيقات RESTful للمستخدم بالتحكم في المكونات الإلكترونية المتصلة بلوحة Intel Galileo Gen 2 عبر طلبات HTTP."
    },
    { 
        question_en: "Which of the following is not an application of IoT?", 
        question_ar: "أي مما يلي ليس تطبيقًا لإنترنت الأشياء؟", 
        options: [
            { text_en: "Wearables", text_ar: "الأجهزة القابلة للارتداء" }, 
            { text_en: "Smart Grid", text_ar: "الشبكة الذكية" }, 
            { text_en: "Arduino", text_ar: "اردوينو" }, 
            { text_en: "Smart City", text_ar: "المدينة الذكية" }
        ], 
        correctAnswer: "C",
        explanation_en: "The Arduino Uno is a hardware device that is based on the Microchip ATmega328P microcontroller.",
        explanation_ar: "Arduino Uno هو جهاز عتاد يعتمد على متحكم Microchip ATmega328P."
    },
    { 
        question_en: "Which one of the following protocols is lightweight?", 
        question_ar: "أي من البروتوكولات التالية خفيف الوزن؟", 
        options: [
            { text_en: "IP", text_ar: "IP" }, 
            { text_en: "HTTP", text_ar: "HTTP" }, 
            { text_en: "MQTT", text_ar: "MQTT" }, 
            { text_en: "CoAP", text_ar: "CoAP" }
        ], 
        correctAnswer: "C",
        explanation_en: "The full form of the MQTT is Message Queue Telemetry Transport. It is a lightweight messaging protocol that runs over the TCP / IP protocol.",
        explanation_ar: "النموذج الكامل لـ MQTT هو نقل قياس عن بعد طابور الرسائل. إنه بروتوكول مراسلة خفيف الوزن يعمل على بروتوكول TCP / IP."
    },
    { 
        question_en: "What is the role of Big Data in IoT's Smart Grid architecture?", 
        question_ar: "ما هو دور البيانات الضخمة في بنية الشبكة الذكية لإنترنت الأشياء؟", 
        options: [
            { text_en: "Filter the data", text_ar: "تصفية البيانات" }, 
            { text_en: "Locked the data", text_ar: "قفل البيانات" }, 
            { text_en: "Store data", text_ar: "تخزين البيانات" }, 
            { text_en: "None of these", text_ar: "لا شيء مما سبق" }
        ], 
        correctAnswer: "C",
        explanation_en: "The main role of Big Data is to store data on a real-time basis in IoT Smart Grid architecture.",
        explanation_ar: "الدور الرئيسي للبيانات الضخمة هو تخزين البيانات في الوقت الفعلي في بنية الشبكة الذكية لإنترنت الأشياء."
    },
    { 
        question_en: "What is the real example of a smart grid device in IoT?", 
        question_ar: "ما هو المثال الحقيقي لجهاز شبكة ذكية في إنترنت الأشياء؟", 
        options: [
            { text_en: "Mobile phone", text_ar: "الهاتف المحمول" }, 
            { text_en: "Television", text_ar: "التلفاز" }, 
            { text_en: "Smart Speaker", text_ar: "السماعة الذكية" }, 
            { text_en: "Smart Meters", text_ar: "العدادات الذكية" }
        ], 
        correctAnswer: "D",
        explanation_en: "Smart Grid is used to monitor the power supply. Consumers' data is collected using a smart grid, and that data is analyzed and distributed to the consumers. The real example of a smart grid device is a smart meter.",
        explanation_ar: "تُستخدم الشبكة الذكية لمراقبة إمدادات الطاقة. يتم جمع بيانات المستهلكين باستخدام شبكة ذكية، ويتم تحليل هذه البيانات وتوزيعها على المستهلكين. المثال الحقيقي لجهاز الشبكة الذكية هو العداد الذكي."
    },
    { 
        question_en: "What is the full form of the MQTT?", 
        question_ar: "ما هو النموذج الكامل لـ MQTT؟", 
        options: [
            { text_en: "Multi-Queue Telemetry Things", text_ar: "أشياء القياس عن بعد متعددة الطوابير" }, 
            { text_en: "Multiple Queue Telemetry Things", text_ar: "أشياء القياس عن بعد ذات الطوابير المتعددة" }, 
            { text_en: "Message Queue Telemetry Things", text_ar: "أشياء قياس عن بعد طابور الرسائل" }, 
            { text_en: "Message Queue Telemetry Transport", text_ar: "نقل قياس عن بعد طابور الرسائل" }
        ], 
        correctAnswer: "D",
        explanation_en: "The full form of the MQTT is Message Queue Telemetry Transport. It is a lightweight messaging protocol that runs over the TCP / IP protocol.",
        explanation_ar: "النموذج الكامل لـ MQTT هو نقل قياس عن بعد طابور الرسائل. إنه بروتوكول مراسلة خفيف الوزن يعمل على بروتوكول TCP / IP."
    },
    { 
        question_en: "What is the full form of ICT?", 
        question_ar: "ما هو النموذج الكامل لـ ICT؟", 
        options: [
            { text_en: "InterConnect Technology", text_ar: "تكنولوجيا الربط البيني" }, 
            { text_en: "Internet Connection Topology", text_ar: "طوبولوجيا اتصال الإنترنت" }, 
            { text_en: "Information and Communication Technology", text_ar: "تكنولوجيا المعلومات والاتصالات" }, 
            { text_en: "Infer Communication Topology", text_ar: "طوبولوجيا الاتصال الاستدلالي" }
        ], 
        correctAnswer: "C",
        explanation_en: "The full form of ICT is Information and Communication Technology.",
        explanation_ar: "النموذج الكامل لـ ICT هو تكنولوجيا المعلومات والاتصالات."
    },
    { 
        question_en: "Which of the following frequencies is correct for the Galileo gen 2 board?", 
        question_ar: "أي من الترددات التالية صحيح للوحة Galileo gen 2؟", 
        options: [
            { text_en: "250 MHz", text_ar: "250 ميجا هرتز" }, 
            { text_en: "400 MHz", text_ar: "400 ميجا هرتز" }, 
            { text_en: "450 MHz", text_ar: "450 ميجا هرتز" }, 
            { text_en: "300 MHz", text_ar: "300 ميجا هرتز" }
        ], 
        correctAnswer: "B",
        explanation_en: "The frequency of Galileo gen 2 board is 400 MHz.",
        explanation_ar: "تردد لوحة Galileo gen 2 هو 400 ميجا هرتز."
    },
    { 
        question_en: "What is the full form of IANA?", 
        question_ar: "ما هو النموذج الكامل لـ IANA؟", 
        options: [
            { text_en: "Inter-Assessment-Number-Access", text_ar: "الوصول إلى رقم التقييم البيني" }, 
            { text_en: "Internet-Association-Numbers-Authority", text_ar: "سلطة أرقام جمعية الإنترنت" }, 
            { text_en: "International-Aid-for-Network-Authority", text_ar: "المساعدة الدولية لسلطة الشبكة" }, 
            { text_en: "Internet-Assigned-Numbers-Authority", text_ar: "سلطة أرقام الإنترنت المخصصة" }
        ], 
        correctAnswer: "D",
        explanation_en: "The full form of IANA is Internet-Assigned-Numbers-Authority. It is an administrative function of the Internet that monitors the IP addresses and domain names.",
        explanation_ar: "النموذج الكامل لـ IANA هو سلطة أرقام الإنترنت المخصصة. وهي وظيفة إدارية للإنترنت تراقب عناوين IP وأسماء النطاقات."
    },
    { 
        question_en: "What is the standard port number of secure MQTT?", 
        question_ar: "ما هو رقم المنفذ القياسي لـ MQTT الآمن؟", 
        options: [
            { text_en: "1883", text_ar: "1883" }, 
            { text_en: "8000", text_ar: "8000" }, 
            { text_en: "8883", text_ar: "8883" }, 
            { text_en: "8888", text_ar: "8888" }
        ], 
        correctAnswer: "C",
        explanation_en: "The standard port number of Secure MQTT is 8883, and it is registered in IANA for Secure MQTT.",
        explanation_ar: "رقم المنفذ القياسي لـ MQTT الآمن هو 8883، وهو مسجل في IANA لـ MQTT الآمن."
    },
    { 
        question_en: "Which of the following layers provides end-to-end communication in IoT?", 
        question_ar: "أي من الطبقات التالية توفر اتصالاً من طرف إلى طرف في إنترنت الأشياء؟", 
        options: [
            { text_en: "Logical layer", text_ar: "الطبقة المنطقية" }, 
            { text_en: "Data link layer", text_ar: "طبقة ربط البيانات" }, 
            { text_en: "Transport layer", text_ar: "طبقة النقل" }, 
            { text_en: "Session layer", text_ar: "طبقة الجلسة" }
        ], 
        correctAnswer: "C",
        explanation_en: "The transport layer provides end-to-end communication in IoT.",
        explanation_ar: "توفر طبقة النقل اتصالاً من طرف إلى طرف في إنترنت الأشياء."
    },
    { 
        question_en: "Which of the following devices is used to measure the gases or liquid?", 
        question_ar: "أي من الأجهزة التالية يستخدم لقياس الغازات أو السوائل؟", 
        options: [
            { text_en: "Optical Sensor", text_ar: "مستشعر ضوئي" }, 
            { text_en: "Gas Sensor", text_ar: "مستشعر غاز" }, 
            { text_en: "Smoke Sensor", text_ar: "مستشعر دخان" }, 
            { text_en: "Pressure sensor", text_ar: "مستشعر ضغط" }
        ], 
        correctAnswer: "D",
        explanation_en: "The pressure sensor is used to measure the gases or liquid. Pressure is the expression of a force that is necessary to prevent fluid from expansion.",
        explanation_ar: "يستخدم مستشعر الضغط لقياس الغازات أو السوائل. الضغط هو تعبير عن القوة اللازمة لمنع السوائل من التمدد."
    },
    { 
        question_en: "Which interface does the fingerprint sensor use?", 
        question_ar: "أي واجهة يستخدمها مستشعر البصمة؟", 
        options: [
            { text_en: "UART interface", text_ar: "واجهة UART" }, 
            { text_en: "CoAP interface", text_ar: "واجهة CoAP" }, 
            { text_en: "SPI interface", text_ar: "واجهة SPI" }, 
            { text_en: "I2P interface", text_ar: "واجهة I2P" }
        ], 
        correctAnswer: "A",
        explanation_en: "The fingerprint sensor uses a UART interface to store fingerprint data. It can be configured in 1:1 or 1:N mode to identify the person.",
        explanation_ar: "يستخدم مستشعر البصمة واجهة UART لتخزين بيانات البصمات. يمكن تكوينه في وضع 1:1 أو 1:N لتحديد الشخص."
    },
    { 
        question_en: "Which of the following protocols is used by USART?", 
        question_ar: "أي من البروتوكولات التالية يستخدمها USART؟", 
        options: [
            { text_en: "RS32", text_ar: "RS32" }, 
            { text_en: "RS232C", text_ar: "RS232C" }, 
            { text_en: "4RS85", text_ar: "4RS85" }, 
            { text_en: "All of these", text_ar: "كل ما سبق" }
        ], 
        correctAnswer: "B",
        explanation_en: "The most commonly used protocol for USART is RS232C.",
        explanation_ar: "البروتوكول الأكثر استخدامًا لـ USART هو RS232C."
    },
    { 
        question_en: "What is the full form of HDLC?", 
        question_ar: "ما هو النموذج الكامل لـ HDLC؟", 
        options: [
            { text_en: "Higher Data Level Communication", text_ar: "اتصال مستوى البيانات الأعلى" }, 
            { text_en: "Higher Data Link Communication", text_ar: "اتصال رابط البيانات الأعلى" }, 
            { text_en: "High-level Data Link Control", text_ar: "التحكم في رابط البيانات عالي المستوى" }, 
            { text_en: "High Data Level Control", text_ar: "التحكم في مستوى البيانات العالي" }
        ], 
        correctAnswer: "C",
        explanation_en: "The full form of the HDLC is High level Data Link Control. It is a communication protocol. It is used to transmit data between nodes and data points.",
        explanation_ar: "النموذج الكامل لـ HDLC هو التحكم في رابط البيانات عالي المستوى. إنه بروتوكول اتصال. يتم استخدامه لنقل البيانات بين العقد ونقاط البيانات."
    },
    { 
        question_en: "Which of the following 'bit' defines the address bit in the control register?", 
        question_ar: "أي 'بت' من التالي يحدد بت العنوان في سجل التحكم؟", 
        options: [
            { text_en: "ML", text_ar: "ML" }, 
            { text_en: "MM", text_ar: "MM" }, 
            { text_en: "RXWake", text_ar: "RXWake" }, 
            { text_en: "None of these", text_ar: "لا شيء مما سبق" }
        ], 
        correctAnswer: "B",
        explanation_en: "The MM bit defines the address bit in the control register.",
        explanation_ar: "يحدد بت MM بت العنوان في سجل التحكم."
    },
    { 
        question_en: "What is another name for I2C?", 
        question_ar: "ما هو الاسم الآخر لـ I2C؟", 
        options: [
            { text_en: "Signal wire interface", text_ar: "واجهة السلك الإشارة" }, 
            { text_en: "Two wire interface", text_ar: "واجهة السلكين" }, 
            { text_en: "UART", text_ar: "UART" }, 
            { text_en: "USART", text_ar: "USART" }
        ], 
        correctAnswer: "B",
        explanation_en: "I2C is commonly known as the Two Wire Interface.",
        explanation_ar: "يُعرف I2C commonly باسم واجهة السلكين."
    },
    { 
        question_en: "When the clock line SCL is high, the SDA is ___ transitioned.", 
        question_ar: "عندما يكون خط الساعة SCL مرتفعًا، يتم انتقال SDA ___.", 
        options: [
            { text_en: "Low", text_ar: "منخفض" }, 
            { text_en: "High", text_ar: "مرتفع" }, 
            { text_en: "Medium", text_ar: "متوسط" }, 
            { text_en: "All of these", text_ar: "كل ما سبق" }
        ], 
        correctAnswer: "A",
        explanation_en: "When the clock line SCL is high, the SDA is low transitioned. Under normal circumstances, this does not happen, as you can see in the subsequent clock pulses that the data line is stable in one state, either high or low, when the clock line is high.",
        explanation_ar: "عندما يكون خط الساعة SCL مرتفعًا، يتم انتقال SDA منخفض. في الظروف العادية، لا يحدث هذا، كما ترى في نبضات الساعة اللاحقة أن خط البيانات مستقر في حالة واحدة، إما مرتفع أو منخفض، عندما يكون خط الساعة مرتفعًا."
    },
    { 
        question_en: "Which of the following protocols does the secure digital card application use?", 
        question_ar: "أي من البروتوكولات التالية تستخدمها تطبيقات البطاقة الرقمية الآمنة؟", 
        options: [
            { text_en: "XMPP", text_ar: "XMPP" }, 
            { text_en: "SPI", text_ar: "SPI" }, 
            { text_en: "MQTT", text_ar: "MQTT" }, 
            { text_en: "HTTPS", text_ar: "HTTPS" }
        ], 
        correctAnswer: "B",
        explanation_en: "SPI protocol is commonly used to secure digital card applications.",
        explanation_ar: "يُستخدم بروتوكول SPI commonly لتأمين تطبيقات البطاقات الرقمية."
    },
    { 
        question_en: "How many logic signals are there in the SPI protocol?", 
        question_ar: "كم عدد الإشارات المنطقية في بروتوكول SPI؟", 
        options: [
            { text_en: "Five signals", text_ar: "خمس إشارات" }, 
            { text_en: "Six signals", text_ar: "ست إشارات" }, 
            { text_en: "Nine signals", text_ar: "تسع إشارات" }, 
            { text_en: "Zero signals", text_ar: "صفر إشارات" }
        ], 
        correctAnswer: "A",
        explanation_en: "There are five logic signals in the SPI protocol: SCLK (Serial Clock), MOSI (Master Output Slave Input), MISO (Master Input Slave Output), SDIO (Serial Data I/O), SS (Slave Select).",
        explanation_ar: "هناك خمس إشارات منطقية في بروتوكول SPI: SCLK (الساعة التسلسلية)، MOSI (خرج الرئيس دخول التابع)، MISO (دخول الرئيس خرج التابع)، SDIO (الإدخال/الإخراج التسلسلي للبيانات)، SS (اختيار التابع)."
    },
    { 
        question_en: "What does MOSI mean?", 
        question_ar: "ماذا تعني MOSI؟", 
        options: [
            { text_en: "MOSI is a network line.", text_ar: "MOSI هو خط شبكة." }, 
            { text_en: "MOSI is a clock signal that sends the clock signals from master to slave.", text_ar: "MOSI هو إشارة ساعة ترسل إشارات الساعة من الرئيس إلى التابع." }, 
            { text_en: "MOSI is a data line that sends the data from master to slave.", text_ar: "MOSI هو خط بيانات يرسل البيانات من الرئيس إلى التابع." }, 
            { text_en: "None of these", text_ar: "لا شيء مما سبق" }
        ], 
        correctAnswer: "C",
        explanation_en: "MOSI stands for Master Out Slave In. MOSI is a data line that sends the data from master to slave.",
        explanation_ar: "MOSI تعني خرج الرئيس دخول التابع. MOSI هو خط بيانات يرسل البيانات من الرئيس إلى التابع."
    },
    { 
        question_en: "What is the full form of HART?", 
        question_ar: "ما هو النموذج الكامل لـ HART؟", 
        options: [
            { text_en: "Highway Application Remote Transport", text_ar: "النقل البعيد لتطبيق الطريق السريع" }, 
            { text_en: "Highway Addressable Remote Transducer", text_ar: "المحول البعيد القابل للعنونة للطريق السريع" }, 
            { text_en: "High Address Reduce Transport", text_ar: "النقل المخفض للعنوان العالي" }, 
            { text_en: "High Application Remote Transport", text_ar: "النقل البعيد للتطبيق العالي" }
        ], 
        correctAnswer: "B",
        explanation_en: "The full form of HART is Highway Addressable Remote Transducer.",
        explanation_ar: "النموذج الكامل لـ HART هو المحول البعيد القابل للعنونة للطريق السريع."
    },
    { 
        question_en: "What is the range of z-wave?", 
        question_ar: "ما هو نطاق زد-ويف؟", 
        options: [
            { text_en: "30 to 100 m", text_ar: "30 إلى 100 م" }, 
            { text_en: "300 to 1000 m", text_ar: "300 إلى 1000 م" }, 
            { text_en: "100 to 1000 m", text_ar: "100 إلى 1000 م" }, 
            { text_en: "Only 10 m", text_ar: "10 م فقط" }
        ], 
        correctAnswer: "A",
        explanation_en: "The Z-Wave is a low-power Mac protocol designed especially for smart home and small business domains. It covers the range from 30 to 100 m.",
        explanation_ar: "زد-ويف هو بروتوكول Mac منخفض الطاقة مصمم خصيصًا لمجالات المنزل الذكي والأعمال الصغيرة. يغطي النطاق من 30 إلى 100 م."
    },
    { 
        question_en: "Which of the following topology is used for ZigBee Smart Energy?", 
        question_ar: "أي من الطوبولوجيات التالية تستخدم لـ ZigBee Smart Energy؟", 
        options: [
            { text_en: "Bus Topology", text_ar: "طوبولوجيا الناقل" }, 
            { text_en: "Ring Topology", text_ar: "طوبولوجيا الحلقة" }, 
            { text_en: "Star Topology", text_ar: "طوبولوجيا النجمة" }, 
            { text_en: "Any Topology", text_ar: "أي طوبولوجيا" }
        ], 
        correctAnswer: "C",
        explanation_en: "ZigBee Smart Energy is designed for a wide range of IoT applications. It supports a wide range of network topologies, such as star topology.",
        explanation_ar: "تم تصميم ZigBee Smart Energy لمجموعة واسعة من تطبيقات إنترنت الأشياء. يدعم مجموعة واسعة من طوبولوجيات الشبكة، مثل طوبولوجيا النجمة."
    },
    { 
        question_en: "Which of the following protocols does not exist at the data link layer?", 
        question_ar: "أي من البروتوكولات التالية لا يوجد في طبقة ربط البيانات؟", 
        options: [
            { text_en: "ZigBee Smart Energy", text_ar: "ZigBee Smart Energy" }, 
            { text_en: "LoRaWAN", text_ar: "LoRaWAN" }, 
            { text_en: "WirelessHART", text_ar: "WirelessHART" }, 
            { text_en: "Secure MQTT", text_ar: "MQTT الآمن" }
        ], 
        correctAnswer: "D",
        explanation_en: "Secure MQTT is a session layer protocol, not a data link layer protocol.",
        explanation_ar: "MQTT الآمن هو بروتوكول طبقة الجلسة، وليس بروتوكول طبقة ربط البيانات."
    },
    { 
        question_en: "Which of the following is the type of SPI controller?", 
        question_ar: "أي مما يلي هو نوع من وحدة تحكم SPI؟", 
        options: [
            { text_en: "Micro-wire or plus", text_ar: "السلك الدقيق أو الزائد" }, 
            { text_en: "Microwire", text_ar: "السلك الدقيق" }, 
            { text_en: "Data SPI", text_ar: "بيانات SPI" }, 
            { text_en: "Queued SPI", text_ar: "SPI المُصفى" }
        ], 
        correctAnswer: "D",
        explanation_en: "A Queued SPI is a type of SPI controller.",
        explanation_ar: "SPI المُصفى هو نوع من وحدة تحكم SPI."
    },
    { 
        question_en: "What is MQTT primarily used for?", 
        question_ar: "ما هو الاستخدام الأساسي لـ MQTT؟", 
        options: [
            { text_en: "User communication", text_ar: "اتصال المستخدم" }, 
            { text_en: "System transfer", text_ar: "نقل النظام" }, 
            { text_en: "Machine to Machine Communication", text_ar: "الاتصال من آلة إلى آلة" }, 
            { text_en: "Create connection", text_ar: "إنشاء اتصال" }
        ], 
        correctAnswer: "C",
        explanation_en: "MQTT is a public messaging protocol. It is designed for lightweight 'Machine to Machine' communication. It was originally developed by IBM.",
        explanation_ar: "MQTT هو بروتوكول مراسلة عام. تم تصميمه للاتصال الخفيف الوزن 'من آلة إلى آلة'. تم تطويره originally بواسطة IBM."
    },
    { 
        question_en: "What is the frequency rate of z-wave?", 
        question_ar: "ما هو معدل تردد زد-ويف؟", 
        options: [
            { text_en: "908.42 GHz", text_ar: "908.42 جيجا هرتز" }, 
            { text_en: "928.49 GHz", text_ar: "928.49 جيجا هرتز" }, 
            { text_en: "888.42 GHz", text_ar: "888.42 جيجا هرتز" }, 
            { text_en: "708.49 GHz", text_ar: "708.49 جيجا هرتز" }
        ], 
        correctAnswer: "A",
        explanation_en: "The frequency rate of z-wave is 908.42 GHz. The Z-Wave is a low-power Mac protocol designed especially for smart home and small business domains.",
        explanation_ar: "معدل تردد زد-ويف هو 908.42 جيجا هرتز. زد-ويف هو بروتوكول Mac منخفض الطاقة مصمم خصيصًا لمجالات المنزل الذكي والأعمال الصغيرة."
    },
    { 
        question_en: "What is another name of the tactile sensor?", 
        question_ar: "ما هو الاسم الآخر لمستشعر اللمس؟", 
        options: [
            { text_en: "Weight sensor", text_ar: "مستشعر الوزن" }, 
            { text_en: "Imaging sensor", text_ar: "مستشعر التصوير" }, 
            { text_en: "Proximity sensor", text_ar: "مستشعر القرب" }, 
            { text_en: "Touch sensor", text_ar: "مستشعر اللمس" }
        ], 
        correctAnswer: "D",
        explanation_en: "The tactile sensor is also called a touch sensor.",
        explanation_ar: "يُسمى مستشعر اللمس أيضًا مستشعر اللمس."
    },
    { 
        question_en: "How many types of capacitive touch sensors in IoT?", 
        question_ar: "كم عدد أنواع مستشعرات اللمس السعوية في إنترنت الأشياء؟", 
        options: [
            { text_en: "Two types", text_ar: "نوعان" }, 
            { text_en: "Five types", text_ar: "خمسة أنواع" }, 
            { text_en: "Seven types", text_ar: "سبعة أنواع" }, 
            { text_en: "Nine types", text_ar: "تسعة أنواع" }
        ], 
        correctAnswer: "A",
        explanation_en: "Two types of capacitive touch sensors in IoT: Projected-capacitive sensing and Surface-capacitive sensing.",
        explanation_ar: "نوعان من مستشعرات اللمس السعوية في إنترنت الأشياء: الاستشعار السعوي المسقط والاستشعار السعوي السطحي."
    },
    { 
        question_en: "Which of the following touch sensors is used in a cell phone?", 
        question_ar: "أي من مستشعرات اللمس التالية يستخدم في الهاتف الخلوي؟", 
        options: [
            { text_en: "Resistive touch sensors", text_ar: "مستشعرات اللمس المقاومة" }, 
            { text_en: "Human sensor", text_ar: "مستشعر الإنسان" }, 
            { text_en: "Capacitive touch sensor", text_ar: "مستشعر اللمس السعوي" }, 
            { text_en: "Follow sensor", text_ar: "مستشعر المتابعة" }
        ], 
        correctAnswer: "C",
        explanation_en: "The capacitive touch sensors are widely used in portable devices such as cell phones. The main reason for this sensor development on the phone is low cost, durability, and design.",
        explanation_ar: "تُستخدم مستشعرات اللمس السعوية على نطاق واسع في الأجهزة المحمولة مثل الهواتف الخلوية. السبب الرئيسي لتطوير هذا المستشعر على الهاتف هو التكلفة المنخفضة والمتانة والتصميم."
    },
    { 
        question_en: "Which of the following languages does GSN work on?", 
        question_ar: "أي من اللغات التالية يعمل عليها GSN؟", 
        options: [
            { text_en: "Python", text_ar: "بايثون" }, 
            { text_en: "JAVA", text_ar: "جافا" }, 
            { text_en: "Android", text_ar: "أندرويد" }, 
            { text_en: "C++", text_ar: "سي بلاس بلاس" }
        ], 
        correctAnswer: "B",
        explanation_en: "GSN stands for Global Sensor Network. GSN works on JAVA language because JAVA language is portable in nature. The other language (such as C, C++, Python, and HTML) is not portable in nature.",
        explanation_ar: "GSN تعني شبكة الاستشعار العالمية. يعمل GSN على لغة الجافا لأن لغة الجافا محمولة بطبيعتها. اللغات الأخرى (مثل C و C++ و Python و HTML) ليست محمولة بطبيعتها."
    },
    { 
        question_en: "Which of the following is the example of a short-range wireless network?", 
        question_ar: "أي مما يلي هو مثال على شبكة لاسلكية قصيرة المدى؟", 
        options: [
            { text_en: "VPN", text_ar: "VPN" }, 
            { text_en: "Wi-Fi", text_ar: "واي فاي" }, 
            { text_en: "Internet", text_ar: "إنترنت" }, 
            { text_en: "WWW", text_ar: "شبكة ويب عالمية" }
        ], 
        correctAnswer: "B",
        explanation_en: "Wi-Fi is an example of a short-range wireless network used in IoT applications.",
        explanation_ar: "الواي فاي هو مثال على شبكة لاسلكية قصيرة المدى مستخدمة في تطبيقات إنترنت الأشياء."
    }
    // يمكنك إضافة المزيد من الأسئلة هنا
];