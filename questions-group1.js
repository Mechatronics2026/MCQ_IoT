// مجموعة أسئلة
var quizData = [
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
    },
    { 
        question_en: "How many number of elements in the Open IoT Architecture?", 
        question_ar: "كم عدد العناصر في بنية إنترنت الأشياء المفتوحة؟", 
        options: [
            { text_en: "3 elements", text_ar: "3 عناصر" }, 
            { text_en: "7 elements", text_ar: "7 عناصر" }, 
            { text_en: "8 elements", text_ar: "8 عناصر" }, 
            { text_en: "6 elements", text_ar: "6 عناصر" }
        ], 
        correctAnswer: "B",
        explanation_en: "The 7 main elements are: sensor middleware (X-GSN), cloud data storage, scheduler, service delivery, and utility manager, request definition, request presentation, configuration and monitoring.",
        explanation_ar: "العناصر السبعة الرئيسية هي: وسيط أجهزة الاستشعار (X-GSN)، تخزين البيانات السحابية، الجدولة، تقديم الخدمة، ومدير المرافق، تعريف الطلب، عرض الطلب، التكوين والمراقبة."
    },
    { 
        question_en: "IoT-A stands for ______", 
        question_ar: "IoT-A تعني ______", 
        options: [
            { text_en: "Internet of Things Area", text_ar: "منطقة إنترنت الأشياء" }, 
            { text_en: "Industrial of things Architecture", text_ar: "بنية الأشياء الصناعية" }, 
            { text_en: "Internet of Things Address", text_ar: "عنوان إنترنت الأشياء" }, 
            { text_en: "Internet of Things Architecture", text_ar: "بنية إنترنت الأشياء" }
        ], 
        correctAnswer: "D",
        explanation_en: "The EU's Internet of Things Architecture is another example of the way in which we can solve IoT related challenges.",
        explanation_ar: "بنية إنترنت الأشياء التابعة للاتحاد الأوروبي هي مثال آخر على الطريقة التي يمكننا بها حل التحديات المتعلقة بإنترنت الأشياء."
    },
    { 
        question_en: "Which of the following is not a feature of the Raspberry Pi model B IoT device?", 
        question_ar: "أي من التالي ليست ميزة في جهاز Raspberry Pi موديل B لإنترنت الأشياء؟", 
        options: [
            { text_en: "It has 256 MB SDRAM", text_ar: "لديها 256 ميغابايت SDRAM" }, 
            { text_en: "It has a single USB connector", text_ar: "لديها موصل USB واحد" }, 
            { text_en: "It has its own operating system", text_ar: "لديها نظام تشغيل خاص بها" }, 
            { text_en: "It has an Ethernet port", text_ar: "لديها منفذ إيثرنت" }
        ], 
        correctAnswer: "A",
        explanation_en: "Raspberry Pi model B has a single 2.0 USB connector and an on-board 10/100 Ethernet RJ45 jack. It has its own operating system and 512 MB SDRAM memory.",
        explanation_ar: "Raspberry Pi موديل B لديها موصل USB واحد 2.0 ومنفذ إيثرنت RJ45 مدمج 10/100. لديها نظام تشغيل خاص بها وذاكرة SDRAM سعة 512 ميغابايت."
    },
    { 
        question_en: "Which of the following processor is used in the Raspberry Pi 3 IoT device?", 
        question_ar: "أي من المعالجات التالية يُستخدم في جهاز Raspberry Pi 3 لإنترنت الأشياء؟", 
        options: [
            { text_en: "Broadcom BCM2711", text_ar: "برودكوم BCM2711" }, 
            { text_en: "Broadcom BCM2837", text_ar: "برودكوم BCM2837" }, 
            { text_en: "Broadcom BCM2838", text_ar: "برودكوم BCM2838" }, 
            { text_en: "Intel 8085", text_ar: "إنتل 8085" }
        ], 
        correctAnswer: "B",
        explanation_en: "Raspberry Pi 3 uses the Broadcom BCM2837 processor, which is a 64-bit quad-core ARM Cortex-A53.",
        explanation_ar: "يستخدم Raspberry Pi 3 معالج Broadcom BCM2837، وهو معالج رباعي النواة 64-bit من نوع ARM Cortex-A53."
    },
    { 
        question_en: "Which library is used to access i2C in Arduino IoT devices?", 
        question_ar: "أي مكتبة تُستخدم للوصول إلى i2C في أجهزة اردوينو لإنترنت الأشياء؟", 
        options: [
            { text_en: "EEPROM", text_ar: "EEPROM" }, 
            { text_en: "Wire", text_ar: "Wire" }, 
            { text_en: "DHT11", text_ar: "DHT11" }, 
            { text_en: "Arduinojson", text_ar: "Arduinojson" }
        ], 
        correctAnswer: "B",
        explanation_en: "i2C is a synchronous and serial communication protocol. Wire library is used to access this protocol in Arduino. Initialization is done with Wire.begin() command.",
        explanation_ar: "i2C هو بروتوكول اتصال تسلسلي متزامن. تُستخدم مكتبة Wire للوصول إلى هذا البروتوكول في اردوينو. يتم التهيئة باستخدام أمر Wire.begin()."
    },
    { 
        question_en: "Which of the following is not related to Arduino IDE IoT software?", 
        question_ar: "أي من التالي لا يرتبط ببرنامج Arduino IDE لإنترنت الأشياء؟", 
        options: [
            { text_en: "Serial monitor", text_ar: "مراقب المسلسل" }, 
            { text_en: "Verify", text_ar: "التحقق" }, 
            { text_en: "Upload", text_ar: "الرفع" }, 
            { text_en: "Terminate", text_ar: "إنهاء" }
        ], 
        correctAnswer: "D",
        explanation_en: "Verify option is used to verify or compile the Arduino code and the upload option is used to upload the code to the Arduino development board. Serial monitor is used to display the data.",
        explanation_ar: "يُستخدم خيار التحقق للتحقق من كود اردوينو أو تجميعه ويُستخدم خيار الرفع لرفع الكود إلى لوحة تطوير اردوينو. يُستخدم مراقب المسلسل لعرض البيانات."
    },
    { 
        question_en: "Which of the following is a complete line of home IoT devices that include smart switches?", 
        question_ar: "أي من التالي هو خط كامل من أجهزة إنترنت الأشياء المنزلية التي تشمل المفاتيح الذكية؟", 
        options: [
            { text_en: "Belkin's WeMo", text_ar: "Belkin's WeMo" }, 
            { text_en: "Cinder", text_ar: "Cinder" }, 
            { text_en: "Awair", text_ar: "Awair" }, 
            { text_en: "Canary", text_ar: "Canary" }
        ], 
        correctAnswer: "A",
        explanation_en: "Belkin's WeMo is a complete line of home IoT devices that includes smart switches, cameras, lights, an air purifier and more. It allows the end user to control a lot of different devices with one smartphone app.",
        explanation_ar: "Belkin's WeMo هو خط كامل من أجهزة إنترنت الأشياء المنزلية التي تشمل المفاتيح الذكية والكاميرات والأضواء ومنقي الهواء والمزيد. يسمح للمستخدم النهائي بالتحكم في الكثير من الأجهزة المختلفة بتطبيق هاتف ذكي واحد."
    },
    { 
        question_en: "IoT gateway must provide ______", 
        question_ar: "يجب أن توفر بوابة إنترنت الأشياء ______", 
        options: [
            { text_en: "Protocol abstraction", text_ar: "تجميع البروتوكولات" }, 
            { text_en: "Data storage", text_ar: "تخزين البيانات" }, 
            { text_en: "Security with hardware", text_ar: "الأمان مع الأجهزة" }, 
            { text_en: "Simple and fast installation", text_ar: "التثبيت البسيط والسريع" }
        ], 
        correctAnswer: "A",
        explanation_en: "IoT gateway must provide: Protocol abstraction, Computing and I/O performance, Integration communication capability.",
        explanation_ar: "يجب أن توفر بوابة إنترنت الأشياء: تجميع البروتوكولات، أداء الحوسبة والإدخال/الإخراج، قدرة اتصال التكامل."
    },
    { 
        question_en: "What IoT collects?", 
        question_ar: "ماذا يجمع إنترنت الأشياء؟", 
        options: [
            { text_en: "Device data", text_ar: "بيانات الجهاز" }, 
            { text_en: "Machine generated data", text_ar: "البيانات المولدة بواسطة الآلة" }, 
            { text_en: "Sensor data", text_ar: "بيانات أجهزة الاستشعار" }, 
            { text_en: "Human generated data", text_ar: "البيانات المولدة بواسطة الإنسان" }
        ], 
        correctAnswer: "B",
        explanation_en: "IoT is aggregating and compressing massive amounts of low latency/ low duration/high volume machine generated data coming from a wide variety of sensor to support real time use cases.",
        explanation_ar: "يجمع إنترنت الأشياء ويضغط كميات هائلة من البيانات المولدة بواسطة الآلة ذات زمن الوصول المنخفض/المدة المنخفضة/الحجم الكبير القادمة من مجموعة متنوعة من أجهزة الاستشعار لدعم حالات الاستخدام في الوقت الفعلي."
    },
    { 
        question_en: "Which of the following protocol is used to link all the devices in the IoT?", 
        question_ar: "أي من البروتوكولات التالية يُستخدم لربط جميع الأجهزة في إنترنت الأشياء؟", 
        options: [
            { text_en: "HTTP", text_ar: "HTTP" }, 
            { text_en: "UDP", text_ar: "UDP" }, 
            { text_en: "Network", text_ar: "الشبكة" }, 
            { text_en: "TCP/IP", text_ar: "TCP/IP" }
        ], 
        correctAnswer: "D",
        explanation_en: "The Internet of Thing is the global system of interconnected computer networks that use the Internet Protocol suite (TCP/IP) to link billions of devices worldwide.",
        explanation_ar: "إنترنت الأشياء هو النظام العالمي لشبكات الكمبيوتر المترابطة التي تستخدم مجموعة بروتوكول الإنترنت (TCP/IP) لربط مليارات الأجهزة في جميع أنحاء العالم."
    },
    { 
        question_en: "Which service permits the changes to the IoT services?", 
        question_ar: "أي خدمة تسمح بالتغييرات في خدمات إنترنت الأشياء؟", 
        options: [
            { text_en: "Update", text_ar: "التحديث" }, 
            { text_en: "Registered service status", text_ar: "حالة الخدمة المسجلة" }, 
            { text_en: "Enable from suspension", text_ar: "تمكين من التعليق" }, 
            { text_en: "Enable", text_ar: "تمكين" }
        ], 
        correctAnswer: "A",
        explanation_en: "The Update service allows modifications and changes to be made to IoT services and their configurations.",
        explanation_ar: "تسمح خدمة التحديث بإجراء التعديلات والتغييرات على خدمات إنترنت الأشياء وتكويناتها."
    },
    { 
        question_en: "What is the role of Cloud in smart grid architecture of IoT?", 
        question_ar: "ما هو دور السحابة في بنية الشبكة الذكية لإنترنت الأشياء؟", 
        options: [
            { text_en: "Security", text_ar: "الأمان" }, 
            { text_en: "Collect data", text_ar: "جمع البيانات" }, 
            { text_en: "Manage data", text_ar: "إدارة البيانات" }, 
            { text_en: "Store data", text_ar: "تخزين البيانات" }
        ], 
        correctAnswer: "C",
        explanation_en: "Cloud to edge Middleware: manage data and edge devices, data streaming and event processing, control authorized access.",
        explanation_ar: "الوسيط من السحابة إلى الحافة: إدارة البيانات وأجهزة الحافة، تدفق البيانات ومعالجة الأحداث، التحكم في الوصول المصرح به."
    },
    { 
        question_en: "What is the component of an IoT system that executes a program?", 
        question_ar: "ما هو مكون نظام إنترنت الأشياء الذي ينفذ برنامجًا؟", 
        options: [
            { text_en: "A sensor", text_ar: "جهاز استشعار" }, 
            { text_en: "A microcontroller", text_ar: "متحكم دقيق" }, 
            { text_en: "An actuator", text_ar: "مشغل" }, 
            { text_en: "A digital to analog converter", text_ar: "محول رقمي إلى تماثلي" }
        ], 
        correctAnswer: "B",
        explanation_en: "Microcontroller is the component of an IOT device that executes a program. It contains a control unit, converters, timers, flash memory, etc. These are used to control the program execution.",
        explanation_ar: "المتحكم الدقيق هو مكون جهاز إنترنت الأشياء الذي ينفذ برنامجًا. يحتوي على وحدة تحكم، محولات، مؤقتات، ذاكرة فلاش، إلخ. تُستخدم هذه للتحكم في تنفيذ البرنامج."
    },
    { 
        question_en: "Which programming language is used by Arduino IDE IoT software for writing codes?", 
        question_ar: "أي لغة برمجة تُستخدم بواسطة برنامج Arduino IDE لإنترنت الأشياء لكتابة الأكواد؟", 
        options: [
            { text_en: "Python", text_ar: "بايثون" }, 
            { text_en: "Java", text_ar: "جافا" }, 
            { text_en: "C/C++", text_ar: "C/C++" }, 
            { text_en: "JavaScript", text_ar: "جافا سكريبت" }
        ], 
        correctAnswer: "C",
        explanation_en: "C and C++ programming languages are used in Arduino IDE for writing, compiling, and uploading codes. Several in-built libraries are also imported for better coding efficiency.",
        explanation_ar: "تُستخدم لغات البرمجة C و C++ في Arduino IDE لكتابة الأكواد وتجميعها ورفعها. يتم أيضًا استيراد العديد من المكتبات المضمنة لكفاءة البرمجة الأفضل."
    },
    { 
        question_en: "What is the full form of DHCP in IoT communication protocols?", 
        question_ar: "ما هو النموذج الكامل لـ DHCP في بروتوكولات اتصال إنترنت الأشياء؟", 
        options: [
            { text_en: "Dynamic Host Communication Protocol", text_ar: "بروتوكول اتصال المضيف الديناميكي" }, 
            { text_en: "Domain Host Communication Protocol", text_ar: "بروتوكول اتصال مضيف المجال" }, 
            { text_en: "Dynamic Host Control Protocol", text_ar: "بروتوكول التحكم بالمضيف الديناميكي" }, 
            { text_en: "Domain Host Control Protocol", text_ar: "بروتوكول التحكم بمضيف المجال" }
        ], 
        correctAnswer: "A",
        explanation_en: "DHCP is a network management protocol used on internet protocol networks to automatically assign IP addresses. DHCP stands for Dynamic Host Communication Protocol.",
        explanation_ar: "DHCP هو بروتوكول إدارة شبكة يُستخدم في شبكات بروتوكول الإنترنت لتعيين عناوين IP تلقائيًا. DHCP تعني بروتوكول اتصال المضيف الديناميكي."
    },
    { 
        question_en: "What is the full form of IDE in Arduino IDE IoT software?", 
        question_ar: "ما هو النموذج الكامل لـ IDE في برنامج Arduino IDE لإنترنت الأشياء؟", 
        options: [
            { text_en: "Intra Defence Environment", text_ar: "بيئة الدفاع الداخلي" }, 
            { text_en: "Intra Development Environment", text_ar: "بيئة التطوير الداخلي" }, 
            { text_en: "Integrated Development Environment", text_ar: "بيئة التطوير المتكاملة" }, 
            { text_en: "Integrated Deployed Environment", text_ar: "بيئة النشر المتكاملة" }
        ], 
        correctAnswer: "C",
        explanation_en: "The full form of IDE in Arduino IDE IoT software is Integrated Development Environment. It is a cross-platform application for Windows, macOS, and Linux operating systems.",
        explanation_ar: "النموذج الكامل لـ IDE في برنامج Arduino IDE لإنترنت الأشياء هو بيئة التطوير المتكاملة. إنه تطبيق عبر المنصات لأنظمة التشغيل Windows وmacOS وLinux."
    },
    { 
        question_en: "dweet.io provides ______ to send data from IoT devices.", 
        question_ar: "يوفر dweet.io ______ لإرسال البيانات من أجهزة إنترنت الأشياء.", 
        options: [
            { text_en: "Web API", text_ar: "واجهة برمجة تطبيقات الويب" }, 
            { text_en: "POST HTTP", text_ar: "POST HTTP" }, 
            { text_en: "JSON", text_ar: "JSON" }, 
            { text_en: "HTTP", text_ar: "HTTP" }
        ], 
        correctAnswer: "A",
        explanation_en: "dweet.io provides a simple Web API that allows IoT devices to easily send and receive data over the internet.",
        explanation_ar: "يوفر dweet.io واجهة برمجة تطبيقات ويب بسيطة تسمح لأجهزة إنترنت الأشياء بإرسال البيانات واستقبالها بسهولة عبر الإنترنت."
    }
    // يمكنك إضافة المزيد من الأسئلة هنا
];