// مجموعة أسئلة
var quizData = [
    {
        question_en: "Which One is not an element of IOT?",
        question_ar: "أي من التالي ليس عنصرًا من عناصر إنترنت الأشياء؟",
        options: [
            { text_en: "People", text_ar: "الأشخاص" },
            { text_en: "Process", text_ar: "العمليات" },
            { text_en: "Security", text_ar: "الأمان" },
            { text_en: "Things", text_ar: "الأشياء" }
        ],
        correctAnswer: "C",
        explanation_en: "Security is not considered a core element of IoT. The main elements are People, Process, Data, and Things.",
        explanation_ar: "الأمان لا يعتبر عنصرًا أساسيًا من عناصر إنترنت الأشياء. العناصر الرئيسية هي الأشخاص، العمليات، البيانات، والأشياء."
    },
    {
        question_en: "Which risks and challenges should be considered in the Internet of Everything?",
        question_ar: "ما هي المخاطر والتحديات التي يجب مراعاتها في إنترنت كل شيء؟",
        options: [
            { text_en: "Privacy and security", text_ar: "الخصوصية والأمان" },
            { text_en: "Energy consumption", text_ar: "استهلاك الطاقة" },
            { text_en: "Network congestion", text_ar: "ازدحام الشبكة" },
            { text_en: "All of the above", text_ar: "كل ما سبق" }
        ],
        correctAnswer: "D",
        explanation_en: "All these risks and challenges need to be considered in the Internet of Everything implementation.",
        explanation_ar: "جميع هذه المخاطر والتحديات تحتاج إلى أن تؤخذ في الاعتبار عند تنفيذ إنترنت كل شيء."
    },
    {
        question_en: "How many devices are estimated to be connected to the IOT by 2020?",
        question_ar: "كم عدد الأجهزة المقدر اتصالها بإنترنت الأشياء بحلول عام 2020؟",
        options: [
            { text_en: "Approx......2 millions", text_ar: "حوالي 2 مليون" },
            { text_en: "Approx......20 millions", text_ar: "حوالي 20 مليون" },
            { text_en: "Approx......75 millions", text_ar: "حوالي 75 مليون" },
            { text_en: "Approx......100 millions", text_ar: "حوالي 100 مليون" }
        ],
        correctAnswer: "C",
        explanation_en: "It was estimated that approximately 75 million devices would be connected to IoT by 2020.",
        explanation_ar: "كان من المقدر أن حوالي 75 مليون جهاز ستكون متصلة بإنترنت الأشياء بحلول عام 2020."
    },
    {
        question_en: "Which is NOT one of the concerns of the IOTs?",
        question_ar: "أي من التالي ليس من مخاوف إنترنت الأشياء؟",
        options: [
            { text_en: "Data storage standards", text_ar: "معايير تخزين البيانات" },
            { text_en: "Efficiency", text_ar: "الكفاءة" },
            { text_en: "Privacy concerns", text_ar: "مخاوف الخصوصية" },
            { text_en: "Cyber security", text_ar: "الأمن السيبراني" }
        ],
        correctAnswer: "B",
        explanation_en: "Efficiency is generally considered a benefit of IoT, not a concern.",
        explanation_ar: "تعتبر الكفاءة بشكل عام فائدة من فوائد إنترنت الأشياء، وليست مصدر قلق."
    },
    {
        question_en: "An equation of internet of things ……… .",
        question_ar: "معادلة إنترنت الأشياء هي ……… .",
        options: [
            { text_en: "physical object + controller sensor and actuator + internet", text_ar: "كائن مادي + مستشعر المتحكم والمشغل + الإنترنت" },
            { text_en: "controller sensor and actuator + internet", text_ar: "مستشعر المتحكم والمشغل + الإنترنت" },
            { text_en: "physical object + internet", text_ar: "كائن مادي + الإنترنت" },
            { text_en: "Physical object + controller + internet", text_ar: "كائن مادي + المتحكم + الإنترنت" }
        ],
        correctAnswer: "A",
        explanation_en: "The complete IoT equation includes physical objects, sensors/actuators/controllers, and internet connectivity.",
        explanation_ar: "تشمل معادلة إنترنت الأشياء الكاملة الأشياء المادية، وأجهزة الاستشعار/المشغلات/المتحكمات، والتوصيل بالإنترنت."
    },
    {
        question_en: "A ……. tends to convert physical attribute to an electrical signal.",
        question_ar: "يميل ……. إلى تحويل السمة المادية إلى إشارة كهربائية.",
        options: [
            { text_en: "actuator", text_ar: "المشغل" },
            { text_en: "compiler", text_ar: "المترجم" },
            { text_en: "sensor", text_ar: "المستشعر" },
            { text_en: "motors", text_ar: "المحركات" }
        ],
        correctAnswer: "C",
        explanation_en: "Sensors convert physical attributes (like temperature, pressure) into electrical signals.",
        explanation_ar: "تحول أجهزة الاستشعار السمات المادية (مثل درجة الحرارة، الضغط) إلى إشارات كهربائية."
    },
    {
        question_en: "A ……. tends to convert electrical signal to physical action .",
        question_ar: "يميل ……. إلى تحويل الإشارة الكهربائية إلى فعل مادي.",
        options: [
            { text_en: "actuator", text_ar: "المشغل" },
            { text_en: "compiler", text_ar: "المترجم" },
            { text_en: "sensor", text_ar: "المستشعر" },
            { text_en: "motors", text_ar: "المحركات" }
        ],
        correctAnswer: "A",
        explanation_en: "Actuators convert electrical signals into physical actions (like movement, sound).",
        explanation_ar: "تحول المشغلات الإشارات الكهربائية إلى أفعال مادية (مثل الحركة، الصوت)."
    },
    {
        question_en: "……. is also often refer to as ambient computer.",
        question_ar: "……. يُشار إليه أيضًا غالبًا باسم الحاسوب البيئي.",
        options: [
            { text_en: "ubicomp", text_ar: "الحوسبة ubiquitous" },
            { text_en: "micro comp", text_ar: "الحاسوب الصغير" },
            { text_en: "mega comp", text_ar: "الحاسوب الضخم" },
            { text_en: "sensor and actuator", text_ar: "المستشعر والمشغل" }
        ],
        correctAnswer: "A",
        explanation_en: "Ubicomp (Ubiquitous Computing) is often referred to as ambient computing.",
        explanation_ar: "الحوسبة ubiquitous يُشار إليها غالبًا باسم الحوسبة البيئية."
    },
    {
        question_en: "……. is a technology where the interaction between technology and it's user is designing to occurs in the users Periphery rather than constantly at the centre of attention.",
        question_ar: "……. هي تقنية حيث يتم تصميم التفاعل بين التكنولوجيا ومستخدمها ليحدث في محيط المستخدم بدلاً من أن يكون دائمًا في مركز الاهتمام.",
        options: [
            { text_en: "calm technology", text_ar: "التكنولوجيا الهادئة" },
            { text_en: "IOT", text_ar: "إنترنت الأشياء" },
            { text_en: "Arduino", text_ar: "اردوينو" },
            { text_en: "ambient computer", text_ar: "الحاسوب البيئي" }
        ],
        correctAnswer: "A",
        explanation_en: "Calm technology operates in the periphery of user attention, only coming to the center when necessary.",
        explanation_ar: "تعمل التكنولوجيا الهادئة في محيط انتباه المستخدم، ولا تأتي إلى المركز إلا عندما يكون ذلك ضروريًا."
    },
    {
        question_en: "choose correct principle of IOT",
        question_ar: "اختر المبدأ الصحيح لإنترنت الأشياء",
        options: [
            { text_en: "focus on the value", text_ar: "التركيز على القيمة" },
            { text_en: "focus on the machine", text_ar: "التركيز على الآلة" },
            { text_en: "build a strong machine", text_ar: "بناء آلة قوية" },
            { text_en: "neither one", text_ar: "لا شيء" }
        ],
        correctAnswer: "A",
        explanation_en: "The correct principle of IoT is to focus on the value it provides rather than just the technology.",
        explanation_ar: "المبدأ الصحيح لإنترنت الأشياء هو التركيز على القيمة التي يقدمها بدلاً من التكنولوجيا فقط."
    },
    {
        question_en: "……. involves delivering different types of services over the Internet.",
        question_ar: "...... تتضمن تقديم أنواع مختلفة من الخدمات عبر الإنترنت.",
        options: [
            { text_en: "physical computing", text_ar: "الحوسبة المادية" },
            { text_en: "chemical computing", text_ar: "الحوسبة الكيميائية" },
            { text_en: "mechanism", text_ar: "الآلية" },
            { text_en: "cloud computing", text_ar: "الحوسبة السحابية" }
        ],
        correctAnswer: "D",
        explanation_en: "Cloud computing involves delivering various services over the internet.",
        explanation_ar: "تتضمن الحوسبة السحابية تقديم خدمات متنوعة عبر الإنترنت."
    },
    {
        question_en: "...... is a structured data which is stored in MB, GB , TB and always locally present .",
        question_ar: "...... هي بيانات منظمة يتم تخزينها بالميغابايت، الجيجابايت، التيرابايت ودائمًا موجودة محليًا.",
        options: [
            { text_en: "big data", text_ar: "البيانات الضخمة" },
            { text_en: "small data", text_ar: "البيانات الصغيرة" },
            { text_en: "physical computing", text_ar: "الحوسبة المادية" },
            { text_en: "cloud computing", text_ar: "الحوسبة السحابية" }
        ],
        correctAnswer: "B",
        explanation_en: "Small data refers to structured data stored in conventional sizes and locally present.",
        explanation_ar: "تشير البيانات الصغيرة إلى البيانات المنظمة المخزنة بأحجام تقليدية وموجودة محليًا."
    },
    {
        question_en: "...... means large set of structured, unstructured and semi structured data.",
        question_ar: "...... تعني مجموعة كبيرة من البيانات المنظمة وغير المنظمة وشبه المنظمة.",
        options: [
            { text_en: "big data", text_ar: "البيانات الضخمة" },
            { text_en: "small data", text_ar: "البيانات الصغيرة" },
            { text_en: "physical computing", text_ar: "الحوسبة المادية" },
            { text_en: "cloud computing", text_ar: "الحوسبة السحابية" }
        ],
        correctAnswer: "A",
        explanation_en: "Big data refers to large volumes of structured, unstructured, and semi-structured data.",
        explanation_ar: "تشير البيانات الضخمة إلى أحجام كبيرة من البيانات المنظمة وغير المنظمة وشبه المنظمة."
    },
    {
        question_en: "...... helps in collaborate in IOT development.",
        question_ar: "...... تساعد في التعاون في تطوير إنترنت الأشياء.",
        options: [
            { text_en: "physical computing", text_ar: "الحوسبة المادية" },
            { text_en: "chemical computing", text_ar: "الحوسبة الكيميائية" },
            { text_en: "mechanism", text_ar: "الآلية" },
            { text_en: "cloud computing", text_ar: "الحوسبة السحابية" }
        ],
        correctAnswer: "D",
        explanation_en: "Cloud computing facilitates collaboration in IoT development by providing shared resources and platforms.",
        explanation_ar: "تسهل الحوسبة السحابية التعاون في تطوير إنترنت الأشياء من خلال توفير الموارد والمنصات المشتركة."
    },
    {
        question_en: "IOT and cloud computing has ...... relationship.",
        question_ar: "إنترنت الأشياء والحوسبة السحابية لهما علاقة ...... .",
        options: [
            { text_en: "physically", text_ar: "جسدية" },
            { text_en: "graphically", text_ar: "بيانية" },
            { text_en: "complementary", text_ar: "تكاملية" },
            { text_en: "coding", text_ar: "برمجة" }
        ],
        correctAnswer: "C",
        explanation_en: "IoT and cloud computing have a complementary relationship where cloud provides the infrastructure for IoT data.",
        explanation_ar: "إنترنت الأشياء والحوسبة السحابية لهما علاقة تكاملية حيث توفر السحابة البنية التحتية لبيانات إنترنت الأشياء."
    },
    {
        question_en: "...... is uses certain protocols to aid sensors in connecting with real time machine to machine network.",
        question_ar: "...... يستخدم بروتوكولات معينة لمساعدة أجهزة الاستشعار في الاتصال بشبكة الآلة إلى الآلة في الوقت الفعلي.",
        options: [
            { text_en: "real time analytics", text_ar: "التحليلات في الوقت الفعلي" },
            { text_en: "data collection", text_ar: "جمع البيانات" },
            { text_en: "device integration", text_ar: "تكامل الأجهزة" },
            { text_en: "real time collection", text_ar: "الجمع في الوقت الفعلي" }
        ],
        correctAnswer: "C",
        explanation_en: "Device integration uses protocols to connect sensors with M2M networks.",
        explanation_ar: "يستخدم تكامل الأجهزة البروتوكولات لربط أجهزة الاستشعار بشبكات الآلة إلى الآلة."
    },
    {
        question_en: "...... software supporting integration binds all system devices to create body of lot system.",
        question_ar: "...... البرمجيات الداعمة للتكامل تربط جميع أجهزة النظام لإنشاء جسم نظام إنترنت الأشياء.",
        options: [
            { text_en: "real time analytics", text_ar: "التحليلات في الوقت الفعلي" },
            { text_en: "data collection", text_ar: "جمع البيانات" },
            { text_en: "device integration", text_ar: "تكامل الأجهزة" },
            { text_en: "real time collection", text_ar: "الجمع في الوقت الفعلي" }
        ],
        correctAnswer: "C",
        explanation_en: "Device integration software binds all system devices together in an IoT system.",
        explanation_ar: "تربط برمجيات تكامل الأجهزة جميع أجهزة النظام معًا في نظام إنترنت الأشياء."
    },
    {
        question_en: "The application data or input from various devices and convert it into viable actions are clear patterns human analysis is called ......",
        question_ar: "بيانات التطبيق أو الإدخال من أجهزة مختلفة وتحويلها إلى إجراءات قابلة للتطبيق وأنماط واضحة للتحليل البشري تسمى ......",
        options: [
            { text_en: "real time analytics", text_ar: "التحليلات في الوقت الفعلي" },
            { text_en: "data collection", text_ar: "جمع البيانات" },
            { text_en: "device integration", text_ar: "تكامل الأجهزة" },
            { text_en: "real time collection", text_ar: "الجمع في الوقت الفعلي" }
        ],
        correctAnswer: "A",
        explanation_en: "Real-time analytics processes device data into actionable patterns for human analysis.",
        explanation_ar: "تقوم التحليلات في الوقت الفعلي بمعالجة بيانات الأجهزة إلى أنماط قابلة للتنفيذ للتحليل البشري."
    },
    {
        question_en: "...... suggest likeness between object and ideas .",
        question_ar: "...... تشير إلى التشابه بين الكائن والأفكار.",
        options: [
            { text_en: "metaphor", text_ar: "المجاز" },
            { text_en: "data", text_ar: "البيانات" },
            { text_en: "lot", text_ar: "إنترنت الأشياء" },
            { text_en: "code", text_ar: "الكود" }
        ],
        correctAnswer: "A",
        explanation_en: "Metaphor suggests likeness or analogy between objects and ideas.",
        explanation_ar: "يشير المجاز إلى التشابه أو القياس بين الكائنات والأفكار."
    },
    {
        question_en: "A ...... is an established set of rules that determines how data is transmitted between different device in the same network.",
        question_ar: "...... هي مجموعة قواعد راسخة تحدد كيفية نقل البيانات بين الأجهزة المختلفة في نفس الشبكة.",
        options: [
            { text_en: "network connection", text_ar: "اتصال الشبكة" },
            { text_en: "TCP IP protocol", text_ar: "بروتوكول TCP IP" },
            { text_en: "network protocol", text_ar: "بروتوكول الشبكة" },
            { text_en: "TCP protocol", text_ar: "بروتوكول TCP" }
        ],
        correctAnswer: "C",
        explanation_en: "A network protocol is a set of rules governing data transmission between devices in a network.",
        explanation_ar: "بروتوكول الشبكة هو مجموعة من القواعد التي تحكم نقل البيانات بين الأجهزة في الشبكة."
    },
    {
        question_en: "The process of building lot hardware and devices enhanced with smart sensors and embedded system using many of the shelf components like sensors, circuits and microcontrollers is called ......",
        question_ar: "عملية بناء أجهزة وإنترنت الأشياء المعززة بأجهزة استشعار ذكية وأنظمة مضمنة باستخدام العديد من المكونات الجاهزة مثل أجهزة الاستشعار والدوائر والمتحكمات الدقيقة تسمى ......",
        options: [
            { text_en: "prototyping", text_ar: "النمذجة الأولية" },
            { text_en: "casting", text_ar: "الصب" },
            { text_en: "protocasting", text_ar: "بروتوكاستينغ" },
            { text_en: "protocol typing", text_ar: "كتابة البروتوكول" }
        ],
        correctAnswer: "A",
        explanation_en: "Prototyping involves building hardware devices using off-the-shelf components for testing and development.",
        explanation_ar: "تشمل النمذجة الأولية بناء الأجهزة المادية باستخدام مكونات جاهزة للاختبار والتطوير."
    },
    {
        question_en: "SOC stands for ......",
        question_ar: "SOC تعني ......",
        options: [
            { text_en: "system on chip", text_ar: "النظام على شريحة" },
            { text_en: "system on change", text_ar: "النظام على التغيير" },
            { text_en: "source on chip", text_ar: "المصدر على شريحة" },
            { text_en: "source on change", text_ar: "المصدر على التغيير" }
        ],
        correctAnswer: "A",
        explanation_en: "SOC stands for System on Chip.",
        explanation_ar: "SOC تعني النظام على شريحة."
    },
    {
        question_en: "A ...... combined a required electronic circuit of various computer components onto a single integrated chip.",
        question_ar: "...... يجمع الدائرة الإلكترونية المطلوبة لمكونات الكمبيوتر المختلفة على شريحة متكاملة واحدة.",
        options: [
            { text_en: "system on chip", text_ar: "النظام على شريحة" },
            { text_en: "system on change", text_ar: "النظام على التغيير" },
            { text_en: "source on chip", text_ar: "المصدر على شريحة" },
            { text_en: "source on change", text_ar: "المصدر على التغيير" }
        ],
        correctAnswer: "A",
        explanation_en: "A System on Chip integrates multiple computer components onto a single chip.",
        explanation_ar: "يجمع النظام على شريحة مكونات كمبيوتر متعددة على شريحة واحدة."
    },
    {
        question_en: "GPU stands for ......",
        question_ar: "GPU تعني ......",
        options: [
            { text_en: "graphical processing unit", text_ar: "وحدة معالجة الرسومات" },
            { text_en: "generally processing unit", text_ar: "وحدة المعالجة العامة" },
            { text_en: "graphically program unit", text_ar: "وحدة البرمجة الرسومية" },
            { text_en: "general programming unit", text_ar: "وحدة البرمجة العامة" }
        ],
        correctAnswer: "A",
        explanation_en: "GPU stands for Graphical Processing Unit.",
        explanation_ar: "GPU تعني وحدة معالجة الرسومات."
    },
    {
        question_en: "……. is an open source electronic platform base on easy to use hardware and software.",
        question_ar: "...... هي منصة إلكترونية مفتوحة المصدر تعتمد على أجهزة وبرامج سهلة الاستخدام.",
        options: [
            { text_en: "servo motor", text_ar: "المحرك المؤازر" },
            { text_en: "Arduino", text_ar: "اردوينو" },
            { text_en: "CPU", text_ar: "وحدة المعالجة المركزية" },
            { text_en: "GPU", text_ar: "وحدة معالجة الرسومات" }
        ],
        correctAnswer: "B",
        explanation_en: "Arduino is an open-source electronic platform based on easy-to-use hardware and software.",
        explanation_ar: "اردوينو هي منصة إلكترونية مفتوحة المصدر تعتمد على أجهزة وبرامج سهلة الاستخدام."
    },
    {
        question_en: "RISC stands for ......",
        question_ar: "RISC تعني ......",
        options: [
            { text_en: "reduced instruction set architecture", text_ar: "بنية مجموعة التعليمات المختزلة" },
            { text_en: "rare information set architecture", text_ar: "بنية مجموعة المعلومات النادرة" },
            { text_en: "reduce information set architecture", text_ar: "بنية مجموعة المعلومات المخفضة" },
            { text_en: "rare instruction set architecture", text_ar: "بنية مجموعة التعليمات النادرة" }
        ],
        correctAnswer: "A",
        explanation_en: "RISC stands for Reduced Instruction Set Computer/Architecture.",
        explanation_ar: "RISC تعني بنية مجموعة التعليمات المختزلة."
    },
    {
        question_en: "CISC stands for ......",
        question_ar: "CISC تعني ......",
        options: [
            { text_en: "complex instruction set architecture", text_ar: "بنية مجموعة التعليمات المعقدة" },
            { text_en: "common instruction set architecture", text_ar: "بنية مجموعة التعليمات الشائعة" },
            { text_en: "complex information set architecture", text_ar: "بنية مجموعة المعلومات المعقدة" },
            { text_en: "common information set architecture", text_ar: "بنية مجموعة المعلومات الشائعة" }
        ],
        correctAnswer: "A",
        explanation_en: "CISC stands for Complex Instruction Set Computer/Architecture.",
        explanation_ar: "CISC تعني بنية مجموعة التعليمات المعقدة."
    },
    {
        question_en: "...... reduce the cycles per instruction at the cost of the number of instructions per program.",
        question_ar: "...... يقلل الدورات لكل تعليمة على حساب عدد التعليمات لكل برنامج.",
        options: [
            { text_en: "RISC", text_ar: "RISC" },
            { text_en: "DISC", text_ar: "DISC" },
            { text_en: "CISC", text_ar: "CISC" },
            { text_en: "MISC", text_ar: "MISC" }
        ],
        correctAnswer: "A",
        explanation_en: "RISC architecture reduces cycles per instruction but may require more instructions per program.",
        explanation_ar: "تقلل بنية RISC الدورات لكل تعليمة ولكنها قد تتطلب المزيد من التعليمات لكل برنامج."
    },
    {
        question_en: "The ...... approach attempts to minimize the number of instructions per program but at the cost of increase in number of cycles per instruction.",
        question_ar: "تحاول طريقة ...... تقليل عدد التعليمات لكل برنامج ولكن على حساب زيادة عدد الدورات لكل تعليمة.",
        options: [
            { text_en: "RISC", text_ar: "RISC" },
            { text_en: "DISC", text_ar: "DISC" },
            { text_en: "CISC", text_ar: "CISC" },
            { text_en: "MISC", text_ar: "MISC" }
        ],
        correctAnswer: "C",
        explanation_en: "CISC architecture minimizes instructions per program but may increase cycles per instruction.",
        explanation_ar: "تقلل بنية CISC عدد التعليمات لكل برنامج ولكنها قد تزيد عدد الدورات لكل تعليمة."
    },
    {
        question_en: "The ...... is a way to connecting electronic components to each other without having solder them together.",
        question_ar: "...... هي طريقة لربط المكونات الإلكترونية ببعضها البعض دون الحاجة إلى لحامها معًا.",
        options: [
            { text_en: "servo motor", text_ar: "المحرك المؤازر" },
            { text_en: "Arduino", text_ar: "اردوينو" },
            { text_en: "Breadboard", text_ar: "لوحة التجارب" },
            { text_en: "GPU", text_ar: "وحدة معالجة الرسومات" }
        ],
        correctAnswer: "C",
        explanation_en: "A breadboard allows connecting electronic components without soldering for prototyping.",
        explanation_ar: "تسمح لوحة التجارب بربط المكونات الإلكترونية دون لحام لأغراض النمذجة الأولية."
    },
    {
        question_en: "……. and ……. are main components of raspberry pi.",
        question_ar: "……. و ……. هما المكونان الرئيسيان لرازبيري باي.",
        options: [
            { text_en: "LED , USB", text_ar: "LED , USB" },
            { text_en: "USB , HDMI", text_ar: "USB , HDMI" },
            { text_en: "LED , HDMI", text_ar: "LED , HDMI" },
            { text_en: "USB , POWER", text_ar: "USB , الطاقة" }
        ],
        correctAnswer: "B",
        explanation_en: "USB and HDMI are main components of Raspberry Pi for connectivity and display.",
        explanation_ar: "يعد USB و HDMI من المكونات الرئيسية لرازبيري باي للاتصال والعرض."
    },
    {
        question_en: "……… is a capable little device that enables people of all ages to explore computing and to learn how to program in languages like Scratch and Python.",
        question_ar: "……… هو جهاز صغير قادر يمكن الأشخاص من جميع الأعمار من استكشاف الحوسبة وتعلم البرمجة بلغات مثل سكراتش وبايثون.",
        options: [
            { text_en: "raspberry pi", text_ar: "رازبيري باي" },
            { text_en: "python programming", text_ar: "برمجة بايثون" },
            { text_en: "Linux", text_ar: "لينكس" },
            { text_en: "web programming", text_ar: "برمجة الويب" }
        ],
        correctAnswer: "A",
        explanation_en: "Raspberry Pi is designed for educational purposes to teach programming and computing.",
        explanation_ar: "تم تصميم رازبيري باي لأغراض تعليمية لتعليم البرمجة والحوسبة."
    },
    {
        question_en: "where to Find MAC-address ……… .",
        question_ar: "أين يمكن العثور على عنوان MAC ……… .",
        options: [
            { text_en: "settings > Wi-Fi networks > wireless control", text_ar: "الإعدادات > شبكات Wi-Fi > التحكم اللاسلكي" },
            { text_en: "settings > wireless control > Wi-Fi settings", text_ar: "الإعدادات > التحكم اللاسلكي > إعدادات Wi-Fi" },
            { text_en: "Wi-Fi networks > wireless control > settings", text_ar: "شبكات Wi-Fi > التحكم اللاسلكي > الإعدادات" },
            { text_en: "settings > wireless control", text_ar: "الإعدادات > التحكم اللاسلكي" }
        ],
        correctAnswer: "A",
        explanation_en: "MAC address is typically found in Settings > Wi-Fi networks > Wireless control on most devices.",
        explanation_ar: "عادة ما يوجد عنوان MAC في الإعدادات > شبكات Wi-Fi > التحكم اللاسلكي في معظم الأجهزة."
    },
    {
        question_en: "……. is the process of making a physical representation of an idea.",
        question_ar: "……. هي عملية صنع تمثيل مادي لفكرة.",
        options: [
            { text_en: "physical proto casting", text_ar: "الصب الأولي المادي" },
            { text_en: "physical prototyping", text_ar: "النمذجة الأولية المادية" },
            { text_en: "type casting", text_ar: "تحويل النوع" },
            { text_en: "process interface", text_ar: "واجهة العملية" }
        ],
        correctAnswer: "B",
        explanation_en: "Physical prototyping involves creating physical representations of ideas for testing and development.",
        explanation_ar: "تشمل النمذجة الأولية المادية إنشاء تمثيلات مادية للأفكار لأغراض الاختبار والتطوير."
    }

    // يمكنك إضافة المزيد من الأسئلة هنا
];