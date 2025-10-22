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
    },
    
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
    },

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
    },

    { 
        question_en: "Through which network does Open IoT manage registration, deployment of sensors?", 
        question_ar: "من خلال أي شبكة تدير Open IoT تسجيل ونشر أجهزة الاستشعار؟", 
        options: [
            { text_en: "LSM", text_ar: "LSM" }, 
            { text_en: "HTTP", text_ar: "HTTP" }, 
            { text_en: "X-GSN", text_ar: "X-GSN" }, 
            { text_en: "GSN", text_ar: "GSN" }
        ], 
        correctAnswer: "C",
        explanation_en: "Open IoT uses X-GSN for managing sensor registration and deployment.",
        explanation_ar: "تستخدم Open IoT بروتوكول X-GSN لإدارة تسجيل أجهزة الاستشعار ونشرها."
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
        correctAnswer: "D",
        explanation_en: "APIs enable systems portability across different platforms.",
        explanation_ar: "تمكن واجهات برمجة التطبيقات إمكانية نقل الأنظمة عبر منصات مختلفة."
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
        correctAnswer: "A",
        explanation_en: "IoT platforms are generally divided into 4 types: Consumer, Enterprise, and Industrial and ..؟..",
        explanation_ar: "،تنقسم منصات إنترنت الأشياء بشكل عام إلى 4 أنواع: الاستهلاكية، المؤسسية، والصناعية."
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
        correctAnswer: "C",
        explanation_en: "Voice communication in IoT can be classified into 3 types: unidirectional and bidirectional and ....",
        explanation_ar: "يمكن تصنيف الاتصال الصوتي في إنترنت الأشياء إلى ثلاثة انواع : ..؟..وأحادي الاتجاه وثنائي الاتجاه."
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
    },

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
    },

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
