const featuredProjects = [
  {
    id: 'saglikcebim',
    title: 'SağlıkCebim',
    kicker: 'Clinical AI · Graduation Project',
    status: 'Runnable prototype',
    categories: ['health', 'vision', 'genai', 'nlp', 'fullstack'],
    featured: true,
    summary: 'Laboratuvar raporu, göğüs röntgeni ve anamnez verisini güvenlik kontrollü klinik yol haritasında birleştiren Türkçe karar destek sistemi.',
    problem: 'Hasta verisi farklı formatlarda ve farklı zamanlarda oluşuyor. Proje; PDF laboratuvar sonuçlarını, radyoloji görüntülerini, serbest metin şikâyetleri ve hasta geçmişini tek bir yapılandırılmış, açıklanabilir ve güvenlik kontrollü akışta birleştiriyor.',
    flow: ['React 18 PWA', 'FastAPI / JWT', 'Clinical orchestrator', 'Local Llama 3 + EfficientNet-B4', 'Evidence + Safety gate'],
    contributions: [
      'pdfplumber ve Türkçe odaklı regex kurallarıyla laboratuvar PDF ayrıştırma; referans aralığına göre yorumlama.',
      'NIH ChestX-ray14 üzerindeki 14 bulgu için EfficientNet-B4 sınıflandırıcı, sınıf bazlı eşikler, Grad-CAM ve ECE kalibrasyon değerlendirmesi.',
      'DiagnosisAgent, ClinicalRoadmapEngine, PharmacologyAgent ve SafetyValidator bileşenlerinden oluşan çok ajanlı klinik akış.',
      'PubMed E-utilities sağlayıcısı ve BM25 sıralama; JWT, pbkdf2_sha256, kullanıcı bazlı veri izolasyonu ve rate limiting.',
      'PDF, ajan, radyoloji, kimlik doğrulama ve golden-scenario akışlarını kapsayan 28 pytest modülü.'
    ],
    result: 'Akademik ve gösterim amaçlı çalışan prototip. Yerel LLM hasta metnini host üzerinde tutar. PostgreSQL üretim bağlantısı ve kimlik bilgisi gerektiren dış kanıt sağlayıcıları tamamlanmadan klinik/üretim sistemi olarak değerlendirilemez.',
    metric: '28',
    metricLabel: 'test modülü',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'PyTorch', 'EfficientNet-B4', 'Ollama', 'Llama 3', 'SQLAlchemy', 'BM25', 'Docker'],
    link: 'https://github.com/TITANBGG/SaglikCebim_V2',
    linkLabel: 'GitHub deposu',
    note: 'Tıbbi cihaz değildir; profesyonel tanı veya tedavinin yerine kullanılamaz.'
  },
  {
    id: 'cxr-fusion',
    title: 'Chest X-Ray Multimodal Diagnosis',
    kicker: 'Multimodal Research · FET’26',
    status: 'Research study',
    categories: ['health', 'vision', 'nlp'],
    featured: true,
    summary: 'Göğüs röntgeni ile klinik rapor temsillerini late fusion ve cross-attention üzerinden birleştiren çok etiketli tanı araştırması.',
    problem: 'Görüntü modeli yalnızca radyografik paterni, metin modeli ise yalnızca rapor bağlamını görür. Çalışma, iki modalitenin tamamlayıcı bilgisini ortak karar katmanında birleştirerek tek-modaliteli baseline’ların ötesine geçmeyi amaçlıyor.',
    flow: ['MIMIC-CXR / CheXpert / NIH', 'Image & text preprocessing', 'ViT / DenseNet + ClinicalBERT', 'Late fusion / Cross-attention', 'Multi-label evaluation'],
    contributions: [
      'EfficientNet-B0, DenseNet-121 ve ViT-B/16 görüntü kodlayıcılarının karşılaştırılması.',
      'BiGRU ve ClinicalBERT ile klinik rapor temsili; görüntü ve metin özelliklerinin ortak etiket uzayına taşınması.',
      'Late fusion baseline’ı ve modaliteler arası etkileşimi öğrenen cross-attention deneyleri.',
      'ROC-AUC üzerinden model ve füzyon karşılaştırması; sınıf bazlı kazanım ve hata analizi.'
    ],
    result: 'Proje deneylerinde ViT-B/16 yaklaşık 0.91, ClinicalBERT yaklaşık 0.90–0.91 ve late fusion yaklaşık 0.92 ROC-AUC üretti; cross-attention bazı sınıflarda ek artış sağladı. Sonuçlar araştırma ortamına aittir.',
    metric: '≈0.92',
    metricLabel: 'late-fusion ROC-AUC',
    tech: ['PyTorch', 'ViT-B/16', 'DenseNet-121', 'ClinicalBERT', 'BiGRU', 'Cross-Attention', 'MIMIC-CXR', 'CheXpert'],
    link: 'https://github.com/TITANBGG/SaglikCebim_V2/tree/main/paper_multimodal_cxr',
    linkLabel: 'Araştırma klasörü',
    note: 'Bildirilen ölçümler proje deneyleridir; klinik geçerlilik iddiası taşımaz.'
  },
  {
    id: 'afet-harita',
    title: 'Real-Time Disaster Mapping',
    kicker: 'Disaster NLP · Geospatial Intelligence',
    status: 'NLP prototype',
    categories: ['nlp', 'fullstack'],
    summary: 'Sosyal medya akışındaki afet mesajlarını yardım çağrısı, ihtiyaç türü ve konum açısından yapılandırıp Türkiye haritasına aktaran sistem.',
    problem: 'Afet anında yüksek hacimli sosyal medya mesajları gürültülü, tekrarlı ve çoğunlukla yapılandırılmamıştır. Sistem, operasyonel değeri olan yardım çağrılarını sınıflandırıp konum ve ihtiyaç bilgisini harita üzerinde görünür kılmayı hedefliyor.',
    flow: ['104K ham tweet', 'Temizleme / etiketleme', 'BERTurk sınıflandırma', 'NER ile varlık-konum çıkarımı', 'C# WPF Türkiye haritası'],
    contributions: [
      '104 bin ham tweetten temizleme, yeniden biçimlendirme ve çoklu etiket üretimiyle yaklaşık 140 bin satırlık çalışma verisi.',
      'BERTurk ile yardım çağrısı tespiti ve afet/ihtiyaç türü için çok sınıflı sınıflandırma akışı.',
      'NER tabanlı konum ve kritik varlık çıkarımı; model çıktısının haritalama katmanına uygun şemaya dönüştürülmesi.',
      'C# WPF üzerinde Türkiye haritası, olay işaretleme ve filtrelenebilir masaüstü arayüzü.'
    ],
    result: 'Araştırma/prototip çalışma; gerçek zamanlı afet operasyonuna alınmadan önce konum doğrulama, yanlış bilgi kontrolü, kaynak güven puanı ve yük testi gerekir.',
    metric: '104K+',
    metricLabel: 'ham sosyal mesaj',
    tech: ['Python', 'BERTurk', 'Transformers', 'NER', 'C#', 'WPF', 'NLP', 'Geospatial UI'],
    link: null,
    note: 'Acil durum sistemi olarak kullanılmak üzere doğrulanmış değildir.'
  },
  {
    id: 'agroscan',
    title: 'AgroScan AI',
    kicker: 'Mobile Vision · AgriTech',
    status: 'Mobile AI prototype',
    categories: ['vision', 'fullstack'],
    summary: 'Yaprak görüntüsünden 10’dan fazla bitki hastalığını sınıflandırarak üreticiye mobil ortamda hızlı ön değerlendirme sunan görüntü işleme uygulaması.',
    problem: 'Bitki hastalıklarında erken görsel belirtiyi fark etmek uzman erişiminin kısıtlı olduğu sahalarda zordur. AgroScan AI, kamera görüntüsünü standartlaştırıp eğitilmiş sınıflandırıcı üzerinden anlaşılır mobil sonuca dönüştürüyor.',
    flow: ['Android kamera / galeri', 'OpenCV ön işleme', 'TensorFlow-Keras inference', 'Hastalık sınıfı', 'Mobil sonuç + Firebase'],
    contributions: [
      'Farklı ışık ve kadraj koşullarındaki yaprak görüntüleri için boyutlandırma ve görüntü ön işleme hattı.',
      '10’dan fazla hastalık sınıfını hedefleyen TensorFlow/Keras tabanlı görüntü sınıflandırma modeli.',
      'Android Studio ve Java ile kamera/galeri girişi, çıkarım sonucu ve kullanıcı akışının tek mobil üründe birleştirilmesi.',
      'Firebase ile uygulama verisi ve mobil servis katmanının yapılandırılması.'
    ],
    result: 'Mobil AI prototipi. Saha kullanımı için farklı cihaz kameraları, bölgesel ürün çeşitleri ve mevsim koşullarıyla daha geniş dış doğrulama gerekir.',
    metric: '10+',
    metricLabel: 'hastalık sınıfı',
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'Java', 'Android Studio', 'Firebase', 'Computer Vision'],
    link: null,
    note: 'Tarımsal uzman görüşünün yerine geçen bir teşhis aracı değildir.'
  },
  {
    id: 'microsoft-jrslm',
    title: 'MicrosoftJrSLM',
    kicker: 'Small Language Models · MLOps',
    status: 'LLM/MLOps prototype',
    categories: ['genai', 'nlp', 'fullstack'],
    summary: 'Phi-3 modelini kurumsal dokümanlara LoRA/QLoRA ile uyarlayan, Ollama ve FastAPI üzerinden yerel çıkarım sunan gizlilik odaklı SLM mimarisi.',
    problem: 'Kurumsal dokümanlar genel amaçlı modellere alan bilgisi kazandırırken veri gizliliği, donanım maliyeti ve dağıtım kontrolü sorunları doğurur. Proje, küçük model + parametrik verimli fine-tuning + yerel servis yaklaşımını inceliyor.',
    flow: ['Kurumsal dokümanlar', 'Instruction dataset', 'Phi-3 + LoRA/QLoRA', 'Quantized local inference', 'Ollama → FastAPI → Docker'],
    contributions: [
      'Doküman içeriğini instruction–response çiftlerine dönüştüren eğitim verisi hazırlama yaklaşımı.',
      'Phi-3 üzerinde LoRA/QLoRA ile tam model eğitimine göre daha düşük bellek maliyetli alan uyarlaması.',
      'Ollama üzerinden yerel model çalıştırma ve FastAPI ile uygulamalara açılan REST servis katmanı.',
      'Docker tabanlı tekrarlanabilir dağıtım ve verinin üçüncü taraf modele gönderilmediği gizlilik odaklı tasarım.'
    ],
    result: 'Teknik prototip. Kalite iddiası için alan bazlı değerlendirme seti, hallucination testi, latency/throughput ölçümü ve RAG/fine-tuning karşılaştırması bir sonraki adımdır.',
    metric: 'Local',
    metricLabel: 'privacy-first inference',
    tech: ['Phi-3', 'LoRA', 'QLoRA', 'PEFT', 'Ollama', 'FastAPI', 'Docker', 'Python', 'MLOps'],
    link: null,
    note: 'Model değerlendirme sonuçları tamamlanmadan üretim kalitesi iddiası taşımıyor.'
  },
  {
    id: 'diabetes',
    title: 'AI-Based Diabetes Prediction',
    kicker: 'Tabular ML · Clinical Decision Support',
    status: 'ML demo',
    categories: ['health'],
    summary: 'Kan testi ve klinik değişkenlerden diyabet riskini tahmin eden, üç makine öğrenmesi yaklaşımını karşılaştıran Streamlit karar destek uygulaması.',
    problem: 'Tablo biçimindeki laboratuvar verilerinde tek bir model seçmek; performans, açıklanabilirlik ve genelleme arasında denge gerektirir. Proje, güçlü baseline’ları aynı ön işleme ve değerlendirme hattında karşılaştırıyor.',
    flow: ['Kan testi verileri', 'Temizleme / özellik matrisi', 'LR · Random Forest · XGBoost', 'ROC-AUC karşılaştırması', 'Streamlit risk paneli'],
    contributions: [
      'Laboratuvar ve klinik değişkenleri model girdisine dönüştüren tablo veri hazırlama hattı.',
      'Logistic Regression, Random Forest ve XGBoost modellerinin aynı problem üzerinde karşılaştırılması.',
      'Accuracy ve ROC-AUC ölçümleriyle sınıflandırma değerlendirmesi; risk çıktısının arayüzde anlaşılır sunumu.',
      'Streamlit ile kullanıcı girdisinden tahmine uzanan uçtan uca demo paneli.'
    ],
    result: 'Proje değerlendirmesinde %92,3 accuracy ve 0.95 ROC-AUC raporlandı. Bu değerler kullanılan proje veri bölünmesine aittir; harici klinik kohort doğrulaması yapılmadan genellenemez.',
    metric: '0.95',
    metricLabel: 'ROC-AUC',
    tech: ['Python', 'scikit-learn', 'XGBoost', 'Pandas', 'Streamlit', 'ROC-AUC'],
    link: null,
    note: 'Klinik tanı aracı değildir; eğitim ve karar destek demosudur.'
  },
  {
    id: 'drowsiness',
    title: 'Driver Drowsiness Detection',
    kicker: 'YOLOv5 · Temporal Vision',
    status: 'Open source',
    categories: ['vision'],
    summary: 'YOLOv5 ile yüz/göz bölgesi tespiti ve LSTM ile zamansal uyanık–uykulu sınıflandırması yapan gerçek zamanlı sürücü güvenliği prototipi.',
    problem: 'Tek karede kapalı göz görmek uykululuğu güvenilir biçimde tanımlamaz. Sistem, uzamsal tespiti ardışık karelerdeki davranış örüntüsüyle birleştirerek erken yorgunluk sinyali üretmeyi hedefliyor.',
    flow: ['Webcam stream', 'YOLOv5 yüz/göz tespiti', 'ROI crop + frame sequence', 'LSTM temporal classifier', 'Awake / Drowsy overlay'],
    contributions: [
      'Uyanık ve uykulu sınıfları için özel etiketli veri seti ve YOLOv5 eğitim hattı.',
      'Tespit edilen göz/yüz bölgelerinden ardışık kare dizileri üreten ön işleme akışı.',
      'Anlık görüntü yerine zamansal paterni değerlendiren LSTM sınıflandırıcı entegrasyonu.',
      'OpenCV webcam akışı üzerinde bounding box ve durum etiketinin gerçek zamanlı bindirilmesi.'
    ],
    result: 'Depoda Awake için 0.948, Drowsy için 0.861 precision–recall skoru ve 0.905 mAP@0.5 raporlanıyor. Gece/düşük ışık ve farklı kamera koşulları gelecek doğrulama alanlarıdır.',
    metric: '0.905',
    metricLabel: 'mAP@0.5',
    tech: ['YOLOv5', 'LSTM', 'OpenCV', 'PyTorch', 'Python', 'Jupyter'],
    link: 'https://github.com/TITANBGG/Driver_Drownise_Detection_Program-',
    linkLabel: 'GitHub deposu',
    note: 'Üretim tipi araç güvenlik sistemi değil, araştırma ve prototipleme çalışmasıdır.'
  },
  {
    id: 'laneguard',
    title: 'LaneGuard-AI',
    kicker: 'Edge AI · ADAS Perception',
    status: 'Active experiment',
    categories: ['vision'],
    summary: 'Düşük güçlü tek kart bilgisayarlarda şerit ve nesne algılamayı aynı gerçek zamanlı görüntü hattında birleştiren hafif ADAS algı modülü.',
    problem: 'Gömülü donanımda gerçek zamanlı algı; doğruluk kadar gecikme, model boyutu ve basit işletilebilirlik gerektirir. LaneGuard, tam otonom sürüş iddiası yerine uygun maliyetli kartlarda güvenilir algı prototipine odaklanıyor.',
    flow: ['Camera', 'Frame preprocessing', 'Lane detection + YOLO object detection', 'Overlay / output', 'Future: decision → MCU/CAN'],
    contributions: [
      'Şerit algılama ve nesne algılamayı paralel çalıştıran modüler görüntü işleme hattı.',
      'YOLO ONNX modelleri ve ONNX Runtime ile embedded-friendly çıkarım tasarımı.',
      'Canlı kamera girdisi, yapılandırılabilir bileşenler ve düşük maliyetli Linux SBC hedefi.',
      'Self-Driving-ish Computer Vision System bileşenlerinin edge kullanımı için sadeleştirilmesi ve yeniden yapılandırılması.'
    ],
    result: 'Aktif öğrenme/prototipleme projesi. NPU/TensorRT hızlandırma, MCU/CAN arayüzü, telemetri UI ve FPS/latency benchmark’ları planlıdır.',
    metric: 'Edge',
    metricLabel: 'SBC deployment target',
    tech: ['Python', 'C++', 'OpenCV', 'ONNX Runtime', 'YOLO', 'Linux SBC', 'CMake'],
    link: 'https://github.com/TITANBGG/LaneGuard-AI',
    linkLabel: 'GitHub deposu',
    note: 'Tam otonom sürüş veya üretim ADAS sistemi değildir.'
  },
  {
    id: 'e-sinif',
    title: 'E-Sınıf',
    kicker: 'EdTech · Generative AI',
    status: 'Open source',
    categories: ['genai', 'fullstack'],
    summary: 'Öğretmen, öğrenci ve yönetici rollerini ders–ödev–sınav süreçlerinde buluşturan; Gemini ile açıklamalı değerlendirme üreten hafif LMS.',
    problem: 'Eğitim yönetiminde içerik, teslim, değerlendirme ve performans raporu ayrı araçlarda dağılır. E-Sınıf bu işlevleri tek rol tabanlı sistemde birleştirip değerlendirme yükünü üretken AI ile azaltıyor.',
    flow: ['Role-based JWT auth', 'Course / assignment CRUD', 'Student submission', 'Gemini auto-evaluation', 'Feedback + reporting'],
    contributions: [
      'Öğretmen, öğrenci ve yönetici panelleri için rol tabanlı JWT kimlik doğrulama.',
      'FastAPI router’ları, Pydantic şemaları ve SQLAlchemy modelleriyle ders/ödev/sınav CRUD akışı.',
      'Gemini API kullanan auto_evaluate modülüyle açıklamalı puan ve geliştirme önerisi üretimi.',
      'SQLite tabanlı hafif veri katmanı ve FastAPI StaticFiles üzerinden responsive HTML/CSS/JS arayüz.'
    ],
    result: 'Çalışan açık kaynak eğitim yönetim prototipi. Üretim kullanımı için kurumsal yetkilendirme, dosya depolama politikası, AI değerlendirme kalibrasyonu ve kapsamlı test gerekir.',
    metric: '03',
    metricLabel: 'kullanıcı rolü',
    tech: ['FastAPI', 'Gemini API', 'SQLAlchemy', 'SQLite', 'JWT', 'Pydantic', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/TITANBGG/E-Sinif-',
    linkLabel: 'GitHub deposu',
    note: 'AI puanlaması öğretmen kararının yerine değil, değerlendirme desteği olarak tasarlanmıştır.'
  },
  {
    id: 'cv-platform',
    title: 'Akıllı CV Analiz ve İş Öneri Platformu',
    kicker: 'NLP · HRTech',
    status: 'Open source',
    categories: ['nlp', 'fullstack'],
    summary: 'PDF/DOCX özgeçmişten beceri ve alan çıkaran; ilanları embedding, cosine similarity ve kritik skill ağırlıklarıyla sıralayan öneri sistemi.',
    problem: 'Adayın CV’siyle ilan arasındaki ilişki yalnızca anahtar kelime eşleşmesiyle açıklanamaz. Platform semantik yakınlığı ve kritik beceri kapsamını birlikte değerlendirerek uyum puanı ve skill-gap raporu sunuyor.',
    flow: ['PDF / DOCX upload', 'MIME validation + PyMuPDF', 'Skill extraction', 'all-MiniLM-L6-v2 embeddings', 'Cosine + weighted skill match', 'Ranked jobs / gap report'],
    contributions: [
      'Uzantı, MIME ve dosya boyutu kontrolleriyle güvenli yükleme; analysis_id tabanlı iş akışı.',
      'PyMuPDF ve docx2txt üzerinden metin çıkarma; NLP ile teknoloji, araç ve alan etiketleme.',
      'Sentence-Transformers all-MiniLM-L6-v2 ile CV ve ilan vektörleri; cosine similarity ve kritik skill ağırlıklandırması.',
      'Eşleşen/eksik beceriler, sıralı iş önerileri ve analiz sonrası veri temizleme yaklaşımı.'
    ],
    result: 'Modüler ve açık kaynak prototip. Gerçek işe alım kullanımından önce önyargı analizi, açıklanabilir skor kalibrasyonu ve farklı meslek gruplarında değerlendirme gerekir.',
    metric: 'PDF',
    metricLabel: '+ DOCX input',
    tech: ['Python', 'FastAPI', 'Sentence-Transformers', 'spaCy', 'PyMuPDF', 'Cosine Similarity', 'SQLite', 'PostgreSQL'],
    link: 'https://github.com/TITANBGG/Find_a_Job_with_CV_Detector',
    linkLabel: 'GitHub deposu',
    note: 'Karar verici işe alım sistemi değil, aday destek ve eşleştirme prototipidir.'
  },
  {
    id: 'elbis',
    title: 'ELBIS',
    kicker: 'Real-Time Data · Geospatial Platform',
    status: 'Open source',
    categories: ['fullstack'],
    summary: 'GDELT, ACLED ve Telegram olaylarını farklı periyotlarda toplayıp PostgreSQL ve WebSocket üzerinden canlı Leaflet haritasına taşıyan platform.',
    problem: 'Küresel olay bilgisi haber, çatışma veri tabanı ve sosyal kanallara dağılır. ELBIS bu kaynakları ortak olay modelinde birleştirerek bağlı istemcilere anlık ve harita tabanlı bir görünüm sunuyor.',
    flow: ['GDELT 15 dk · ACLED 1 saat · Telegram anlık', 'FastAPI schedulers', 'Location extraction', 'PostgreSQL / SQLAlchemy', 'WebSocket + REST fallback', 'React / Leaflet'],
    contributions: [
      'GDELT, ACLED ve Telethon tabanlı Telegram watcher için bağımsız veri toplayıcı modüller.',
      'Async SQLAlchemy ile kalıcı olay modeli, upsert/query işlemleri ve PostgreSQL 15 veri katmanı.',
      'Yeni olayları bağlı istemcilere aktaran /ws WebSocket endpoint’i; kopma halinde son 200 olayı sunan HTTP fallback.',
      'React + Vite + Leaflet arayüzü ve Docker Compose ile tekrarlanabilir full-stack kurulum.'
    ],
    result: 'Üç veri kaynağını tek canlı haritada birleştiren çalışan açık kaynak platform. Üretim ölçeğinde deduplication, kaynak güveni, coğrafi doğrulama ve gözlemlenebilirlik genişletilmelidir.',
    metric: '03',
    metricLabel: 'canlı veri kaynağı',
    tech: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'WebSocket', 'React', 'Vite', 'Leaflet', 'Telethon', 'Docker'],
    link: 'https://github.com/TITANBGG/Elbis',
    linkLabel: 'GitHub deposu',
    note: 'Kaynak verilerin doğruluğu ilgili sağlayıcılara bağlıdır.'
  },
  {
    id: 'story-generator',
    title: 'Educational Story Generator',
    kicker: 'GenAI · EdTech Product',
    status: 'Architecture concept',
    categories: ['genai', 'nlp', 'fullstack'],
    summary: 'Çocuğun yaş grubu, tema ve öğrenme hedefine göre eğitici hikâye üreten; geçmişi kullanıcı hesabında saklayan web uygulaması tasarımı.',
    problem: 'Genel amaçlı metin üretimi çocuklar için yaş, dil seviyesi, öğrenme hedefi ve içerik güvenliği açısından yeterince kontrollü değildir. Proje bu kısıtları yapılandırılmış üretim parametrelerine dönüştürüyor.',
    flow: ['Age + theme + learning goal', 'React form / JWT', 'FastAPI validation', 'Prompt orchestration + LLM', 'Safety / format checks', 'PostgreSQL story library'],
    contributions: [
      'Yaş grubu, tema, uzunluk ve kazanımı açık parametrelere dönüştüren üretim şeması.',
      'FastAPI + Pydantic ile istek doğrulama ve JWT tabanlı kullanıcı/oturum mimarisi.',
      'Hikâye yapısı, kelime seviyesi ve eğitsel hedefi yöneten prompt template yaklaşımı.',
      'React arayüz ve PostgreSQL üzerinde kullanıcıya ait hikâye geçmişi için üç katmanlı full-stack tasarım.'
    ],
    result: 'Mimari/tasarım aşamasındaki GenAI ürün vakası. Portföyde tamamlanmış ürün gibi değil, uygulanabilir sistem tasarımı ve sonraki geliştirme hedefi olarak sunuluyor.',
    metric: '03',
    metricLabel: 'uygulama katmanı',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'JWT', 'Pydantic', 'LLM', 'Prompt Engineering'],
    link: null,
    note: 'İçerik güvenliği, ebeveyn kontrolü ve yaş uygunluğu testleri uygulama öncesi zorunludur.'
  }
];

const archiveProjects = [
  {
    id: 'blockchain-assistant', title: 'AI-Driven Blockchain Financial Assistant',
    kicker: 'FinTech · Blockchain · AI', status: 'Architecture concept',
    categories: ['genai', 'nlp', 'fullstack', 'blockchain'], archiveCategories: ['ai', 'software'],
    summary: 'Finansal niyet ve doküman analizini fraud detection ve akıllı sözleşme katmanıyla birleştiren çok bileşenli asistan mimarisi.',
    problem: 'Finans uygulamalarında doğal dildeki kullanıcı isteği, risk sinyali ve zincir üzerindeki işlem mantığı farklı sistemlerde ele alınır. Bu çalışma bunları denetlenebilir bir servis hattında birleştiren mimariyi tasarlar.',
    flow: ['User intent / document', 'BERT-GPT analysis', 'XGBoost fraud score', 'Solidity / Hyperledger', 'Chainlink / IoT signal'],
    contributions: ['Niyet, doküman ve işlem riskini ayrı AI bileşenlerinde değerlendiren katmanlı tasarım.', 'Akıllı sözleşme tetiklerini dış veriyle beslemek için oracle ve IoT entegrasyon yaklaşımı.'],
    result: 'Konsept/mimari çalışma. Finansal ürün olabilmesi için regülasyon, tehdit modelleme, audit ve gerçek veriyle risk kalibrasyonu gerekir.',
    metric: 'AI×Web3', metricLabel: 'architecture',
    tech: ['BERT', 'GPT', 'XGBoost', 'Solidity', 'Hyperledger', 'Chainlink', 'IoT'], link: null,
    note: 'Yatırım tavsiyesi veya denetlenmiş finansal sistem değildir.'
  },
  {
    id: 'foodlyze', title: 'Foodlyze', kicker: 'Mobile Health · Food Intelligence', status: 'Mobile prototype',
    categories: ['vision', 'fullstack', 'health'], archiveCategories: ['ai', 'mobile'],
    summary: 'Sağlıklı yemek önerisi ile barkod üzerinden ürün ve içerik analizini bir mobil deneyimde birleştiren gıda teknolojisi çalışması.',
    problem: 'Kullanıcılar paketli ürün içeriğini ve alternatif yemek seçeneklerini hızlı yorumlamakta zorlanır. Foodlyze, barkod/veri tabanı sorgusunu kişiselleştirilmiş öneri akışıyla buluşturur.',
    flow: ['Barcode / preference input', 'ML Kit scan', 'Open Food Facts API', 'Ingredient analysis', 'Recommendation UI'],
    contributions: ['Kotlin tabanlı mobil barkod tarama ve ürün bilgisini harici API’den alma akışı.', 'Firebase veri katmanı ile ürün geçmişi ve öneri deneyiminin yapılandırılması.'],
    result: 'İki ürün fikrini birleştiren mobil prototip: sağlıklı yemek önerici ve barkodla paketli gıda analizi.',
    metric: '02', metricLabel: 'mobile use case',
    tech: ['Kotlin', 'Firebase', 'ML Kit', 'Open Food Facts API', 'Android'],
    link: 'https://github.com/TITANBGG/FOODLYZE', linkLabel: 'GitHub deposu',
    note: 'Beslenme uzmanı değerlendirmesinin yerine geçmez.'
  },
  {
    id: 'en-tr-translation', title: 'English–Turkish Translation with NLP', kicker: 'Sequence Modeling · NLP', status: 'Learning project',
    categories: ['nlp'], archiveCategories: ['ai'],
    summary: 'İngilizce–Türkçe cümle çiftlerinde tokenization, embedding, seq2seq ve attention bileşenlerini deneyen makine çevirisi çalışması.',
    problem: 'İki dil arasındaki sözdizimi ve ek yapısı farkı, kelime kelime çeviriyi yetersiz bırakır. Proje dizisel bağlamı kodlayıp hedef cümleyi adım adım üretmeye odaklanır.',
    flow: ['Parallel sentences', 'Tokenization / vocabulary', 'Encoder embeddings', 'Attention decoder', 'Turkish sequence'],
    contributions: ['Kaynak ve hedef dil için ayrı sözlük, padding ve dizi hazırlama hattı.', 'Seq2seq decoder üzerinde attention ile kaynak tokenlara dinamik odaklanma deneyi.'],
    result: 'NLP ve encoder–decoder mimarisini uygulamalı öğrenmeye yönelik deneysel çeviri projesi.',
    metric: 'Seq2Seq', metricLabel: '+ attention',
    tech: ['Python', 'Tokenization', 'Embeddings', 'Seq2Seq', 'Attention'],
    link: 'https://github.com/TITANBGG/English_Turkish_Translate_NLP', linkLabel: 'GitHub deposu',
    note: 'Üretim kalitesinde çeviri hizmeti olarak değerlendirilmemelidir.'
  },
  {
    id: 'healthcare-nlp', title: 'Healthcare_NLP', kicker: 'Clinical Text · Information Extraction', status: 'NLP exploration',
    categories: ['health', 'nlp'], archiveCategories: ['ai'],
    summary: 'Klinik ve medikal metinlerde normalizasyon, tokenization, NER ve sınıflandırma üzerinden yapılandırılmış bilgi çıkarımı deneyi.',
    problem: 'Medikal metinler kısaltma, alan terimi ve serbest yazım nedeniyle doğrudan analize uygun değildir. Çalışma, metni temizleyip klinik varlık ve sınıflara dönüştüren temel pipeline’ı inceler.',
    flow: ['Clinical text', 'Normalization', 'Tokenization / stemming', 'NER', 'Classification / structured output'],
    contributions: ['Medikal metin için ön işleme ve kelime düzeyi normalizasyon denemeleri.', 'Hastalık, bulgu ve tedavi benzeri varlıkları çıkarma ve metin sınıflandırma akışı.'],
    result: 'Sağlık alanında NLP ön işleme ve bilgi çıkarımı tekniklerini bir araya getiren araştırma deposu.',
    metric: 'NER', metricLabel: 'clinical extraction',
    tech: ['Python', 'NLP', 'NER', 'Tokenization', 'Classification'],
    link: 'https://github.com/TITANBGG/Healthcare_NLP', linkLabel: 'GitHub deposu',
    note: 'Çıktılar klinik karar amacıyla doğrulanmış değildir.'
  },
  {
    id: 'basic-chatbot', title: 'BasicChatBot', kicker: 'Conversational AI · API', status: 'Early prototype',
    categories: ['genai', 'nlp'], archiveCategories: ['ai'],
    summary: 'Python ve ChatGPT API ile soru–cevap ve temel kullanıcı yönlendirmesi üreten erken dönem konuşma asistanı.',
    problem: 'Harici bir dil modelini uygulama akışına bağlamak; istek biçimi, bağlam, hata yönetimi ve çıktı sunumunu birlikte gerektirir.',
    flow: ['User message', 'Python client', 'Prompt / context', 'ChatGPT 3.5 API', 'Assistant response'],
    contributions: ['API tabanlı sohbet döngüsü ve rol mesajlarının yapılandırılması.', 'Basit soru–cevap ile rehberlik senaryolarının tek arayüzde denenmesi.'],
    result: 'LLM API entegrasyonu ve konuşma akışı öğrenimi için geliştirilmiş temel prototip.',
    metric: 'API', metricLabel: 'chat loop', tech: ['Python', 'ChatGPT API', 'Prompting', 'Conversational AI'], link: null,
    note: 'Güncel güvenlik ve değerlendirme katmanları eklenmeden üretim sistemi değildir.'
  },
  {
    id: 'my-ai-roger', title: 'MY_AI_ROGER / MY_AI_PROJECT', kicker: 'Custom AI Assistant · Classification', status: 'Experimental',
    categories: ['genai', 'nlp'], archiveCategories: ['ai'],
    summary: 'Farklı veri setlerinde ön işleme, tokenization ve sınıflandırma deneylerini bağlama göre çıktı üreten özel asistan fikrinde birleştiren çalışma.',
    problem: 'Farklı veri kaynaklarını tek asistan davranışına taşımak, ortak bir ön işleme ve karar şeması gerektirir.',
    flow: ['Dataset input', 'Cleaning / tokenization', 'Feature representation', 'Classifier / rules', 'Context-aware response'],
    contributions: ['Birden fazla veri setini ortak işleme hattına alan deneysel yapı.', 'Sınıflandırma sonucunu bağlama göre kullanıcı çıktısına dönüştüren asistan mantığı.'],
    result: 'Özel AI asistanlarının veri ve sınıflandırma temellerini inceleyen erken dönem deney grubu.',
    metric: 'Multi-data', metricLabel: 'assistant experiment', tech: ['Python', 'NLP', 'Classification', 'Tokenization'], link: null,
    note: 'Birbirine yakın iki erken proje tek portföy vakası altında birleştirildi.'
  },
  {
    id: 'nlp-project', title: 'NLP Project', kicker: 'Text Processing · Data Quality', status: 'Course project',
    categories: ['nlp'], archiveCategories: ['ai'],
    summary: 'Google Colab üzerinde veri temizleme, sınıflandırma, sıralama ve eksik veri tespiti adımlarını bir araya getiren NLP pipeline çalışması.',
    problem: 'Model performansı, ham metindeki tekrar, eksik değer ve tutarsız etiketlerden doğrudan etkilenir. Çalışma modelden önceki veri kalitesi aşamasına odaklanır.',
    flow: ['Raw text data', 'Missing / duplicate checks', 'Cleaning', 'Feature extraction', 'Classification / ranking'],
    contributions: ['Eksik veri ve tutarsız kayıtları tespit eden veri kalite adımları.', 'Temizlenmiş metin üzerinde sınıflandırma ve sıralama deneyleri.'],
    result: 'NLP yaşam döngüsünün veri hazırlama ve temel modelleme aşamalarını gösteren ders projesi.',
    metric: 'Pipeline', metricLabel: 'data → model', tech: ['Python', 'Google Colab', 'Pandas', 'NLP', 'Classification'], link: null,
    note: 'Araştırma benchmark’ı değil, yöntem odaklı eğitim çalışmasıdır.'
  },
  {
    id: 'whatsapp-ai', title: 'WhatsApp_AI / Search BOT', kicker: 'Automation · Messaging', status: 'Integration experiment',
    categories: ['nlp', 'fullstack'], archiveCategories: ['ai', 'software'],
    summary: 'WhatsApp konuşmalarını anahtar kelimeyle tarayan ve mesajlaşma kanalı üzerinden bot yanıtı üreten otomasyon deneyi.',
    problem: 'Uzun sohbet geçmişinde belirli bilgiye erişim ve otomatik yanıt, kanal entegrasyonu ile metin aramasının birlikte çözülmesini gerektirir.',
    flow: ['WhatsApp message', 'Twilio webhook', 'Python search / intent', 'Matched context', 'Bot response'],
    contributions: ['Twilio ve ngrok ile mesaj webhook’unu yerel geliştirme ortamına bağlama.', 'Anahtar kelime araması ve basit bot yanıtını PowerShell/Python araçlarıyla otomatikleştirme.'],
    result: 'Mesajlaşma API’leri ve webhook tabanlı otomasyon üzerine entegrasyon prototipi.',
    metric: 'Webhook', metricLabel: 'message automation', tech: ['Python', 'PowerShell', 'Twilio', 'ngrok', 'WhatsApp'],
    link: 'https://github.com/TITANBGG/Whatsapp_AI', linkLabel: 'GitHub deposu',
    note: 'Gerçek kullanıcı verisinde mahremiyet ve platform politikaları ayrıca ele alınmalıdır.'
  },
  {
    id: 'quickchat', title: 'QuickChat', kicker: 'Chat API · Lightweight Web', status: 'Open source',
    categories: ['fullstack', 'genai'], archiveCategories: ['ai', 'software'],
    summary: 'HTML arayüzü ve Python backend üzerinden başka uygulamalara gömülebilen hafif chatbot servisi.',
    problem: 'Basit web projelerine hızlı sohbet özelliği eklemek, küçük ve anlaşılır bir istemci–API sözleşmesi gerektirir.',
    flow: ['Embedded HTML UI', 'HTTP request', 'Python API', 'Chat response', 'UI render'],
    contributions: ['Hafif istemci arayüzü ile Python servisinin ayrıştırılması.', 'API tabanlı sohbet bileşeninin farklı sayfalara gömülebilecek şekilde tasarlanması.'],
    result: 'Temel chatbot servisi ve web entegrasyonunu gösteren küçük açık kaynak çalışma.',
    metric: 'Light', metricLabel: 'embeddable chat', tech: ['HTML', 'Python', 'REST API', 'JavaScript'],
    link: 'https://github.com/TITANBGG/QuickChat', linkLabel: 'GitHub deposu',
    note: 'Kimlik doğrulama ve abuse koruması olmadan internete açık servis edilmemelidir.'
  },
  {
    id: 'library-system', title: 'Kütüphane Takip Sistemi', kicker: 'Desktop Software · OOP', status: 'Course project',
    categories: ['software'], archiveCategories: ['software'],
    summary: 'Kitap, üye, ödünç alma, iade ve arama süreçlerini yöneten C# Windows Forms masaüstü uygulaması.',
    problem: 'Kütüphane süreçleri birbiriyle ilişkili varlıklar, durum geçişleri ve geçerli işlem kuralları gerektirir.',
    flow: ['Member / book input', 'WinForms UI', 'Business rules', 'Borrow-return records', 'Search / status view'],
    contributions: ['Kitap, üye ve ödünç kayıtlarını nesne tabanlı sınıflarla modelleme.', 'CRUD, arama ve ödünç–iade durum geçişlerini Windows Forms arayüzünde birleştirme.'],
    result: 'OOP ve olay tabanlı masaüstü arayüz pratiğini gösteren ders projesi.',
    metric: 'CRUD', metricLabel: 'desktop workflow', tech: ['C#', '.NET', 'Windows Forms', 'OOP'],
    link: 'https://github.com/TITANBGG/Kutuphane_Takip_Sistemi', linkLabel: 'GitHub deposu',
    note: 'Kurumsal kütüphane otomasyonu değil, eğitim amaçlı masaüstü uygulamasıdır.'
  },
  {
    id: 'generic-data-structures', title: 'Generic Veri Yapıları', kicker: 'Algorithms · Type-Safe C#', status: 'Course project',
    categories: ['software'], archiveCategories: ['software'],
    summary: 'Stack, Queue, Linked List ve Tree gibi temel veri yapılarını generic ve type-safe C# sınıflarıyla yeniden uygulayan çalışma.',
    problem: 'Hazır koleksiyonları kullanmadan veri yapısının bellek, düğüm ve işlem mantığını anlamak gerekir.',
    flow: ['Generic type T', 'Node / storage model', 'Core operations', 'Boundary checks', 'Usage tests'],
    contributions: ['Generic sınıflarla tekrar kullanılabilir veri yapısı implementasyonları.', 'Ekleme, silme, arama ve dolaşma işlemlerinde sınır durumlarının ele alınması.'],
    result: 'Algoritma ve nesne tabanlı tasarım temellerini gösteren uygulamalı çalışma.',
    metric: 'T', metricLabel: 'type-safe structures', tech: ['C#', 'Generics', 'Stack', 'Queue', 'Linked List', 'Tree'],
    link: 'https://github.com/TITANBGG/-Generic-Veri-Yap-lar-Projesi', linkLabel: 'GitHub deposu',
    note: 'Standart kütüphane koleksiyonlarının yerine üretim kullanımı için tasarlanmamıştır.'
  },
  {
    id: 'flappy-clone', title: 'FlappyBird Clone', kicker: 'Game Development · C#', status: 'Learning project',
    categories: ['software', 'game'], archiveCategories: ['software', 'mobile'],
    summary: 'Çarpışma, yerçekimi, skor ve zorluk artışı mekaniklerini C# ile yeniden kuran 2D oyun klonu.',
    problem: 'Basit görünen arcade oyunları sabit zaman adımı, girdi, fizik ve oyun durumunun doğru koordinasyonunu gerektirir.',
    flow: ['Player input', 'Physics update', 'Obstacle spawn', 'Collision check', 'Score / difficulty'],
    contributions: ['Yerçekimi ve sıçrama davranışını yöneten oyun döngüsü.', 'Engel üretimi, çarpışma ve skora bağlı zorluk ölçekleme mantığı.'],
    result: 'Oyun döngüsü ve durum yönetimini öğrenmeye yönelik C# klon projesi.',
    metric: '2D', metricLabel: 'game loop', tech: ['C#', 'Game Loop', 'Collision', 'Physics'], link: null,
    note: 'Ticari oyun değil, eğitim amaçlı yeniden yapım çalışmasıdır.'
  },
  {
    id: 'planty', title: 'Planty: Kelime Bulmaca', kicker: 'Android Game · Java', status: 'Mobile game prototype',
    categories: ['software', 'game', 'mobile'], archiveCategories: ['mobile'],
    summary: 'Dinamik kelime setleri, ipucu sistemi, zorluk ölçekleme ve çevrimdışı oynanış sunan Android kelime bulmaca oyunu.',
    problem: 'Kelime oyununda tekrar oynanabilirlik, veri seti yönetimi ve oyuncuya uygun zorluk dengesi gerektirir.',
    flow: ['Offline word set', 'Puzzle generation', 'User guesses', 'Hint system', 'Difficulty progression'],
    contributions: ['Java Android üzerinde çevrimdışı kelime ve seviye yönetimi.', 'İpucu tüketimi ile zorluk artışını oyun durumuna bağlayan mekanik.'],
    result: 'Mobil arayüz, yerel veri ve oyun mantığını birleştiren Android prototipi.',
    metric: 'Offline', metricLabel: 'mobile gameplay', tech: ['Java', 'Android', 'Local Data', 'Game Logic'], link: null,
    note: 'Mağaza yayını ve cihaz matrisi testi dokümante edilmemiştir.'
  },
  {
    id: 'software-musical', title: 'Yazılım Müzikali / Bilim Müzikali', kicker: 'Creative Coding · Desktop', status: 'Creative prototype',
    categories: ['software'], archiveCategories: ['software'],
    summary: 'Müzik, ses işleme ve görsel geri bildirimi Windows Forms üzerinde birleştiren yaratıcı masaüstü uygulaması.',
    problem: 'Ses olaylarını kullanıcı etkileşimi ve görselleştirmeyle eş zamanlı sunmak zamanlama ve durum yönetimi gerektirir.',
    flow: ['User interaction', 'Audio event', 'Timing / state logic', 'Visual response', 'Desktop output'],
    contributions: ['Ses oynatma ve kullanıcı olaylarını aynı masaüstü akışında koordine etme.', 'Müzik/bilim temasını interaktif görsel bileşenlerle anlatan yaratıcı yazılım tasarımı.'],
    result: 'C# masaüstü geliştirme ile yaratıcı kodlamayı bir araya getiren prototip.',
    metric: 'Audio', metricLabel: '+ visual interaction', tech: ['C#', 'Windows Forms', 'Audio', 'Visualization'], link: null,
    note: 'Deneysel yaratıcı yazılım çalışmasıdır.'
  },
  {
    id: 'digital-brain', title: 'FloLabs Digital Brain', kicker: 'AI · IoT · Robotics', status: 'R&D concept',
    categories: ['genai', 'iot', 'research'], archiveCategories: ['ai', 'iot'],
    summary: 'Dijital AI modellerini sensör ve fiziksel donanımla birleştiren bağlam farkındalıklı “Digital Brain” araştırma fikri.',
    problem: 'Bir AI modelinin fiziksel dünyada anlamlı davranması için sensör bağlamı, karar katmanı ve güvenli actuator kontrolü birlikte tasarlanmalıdır.',
    flow: ['Sensor / IoT input', 'Context model', 'AI decision layer', 'Robot / device command', 'Feedback loop'],
    contributions: ['AI, IoT ve robotik bileşenleri kapalı geri besleme döngüsünde ele alan sistem mimarisi.', 'Dijital model çıktısını fiziksel cihaz davranışına bağlayan bağlam/karar katmanı yaklaşımı.'],
    result: 'Ar-Ge konsepti; fiziksel donanım, güvenlik limitleri ve gerçek zamanlı middleware ile prototiplenmesi gerekir.',
    metric: 'Cyber', metricLabel: 'physical AI concept', tech: ['AI', 'IoT', 'Robotics', 'Sensors', 'Context Awareness'], link: null,
    note: 'Tamamlanmış ticari ürün değil, araştırma ve mimari çalışmadır.'
  },
  {
    id: 'tarim-cepte', title: 'Tarım Cepte', kicker: 'AgriTech · Product', status: 'Teknofest finalist',
    categories: ['fullstack', 'mobile'], archiveCategories: ['mobile', 'software'],
    summary: 'Üretici ihtiyaçlarını dijital araçlarla buluşturup tarımsal bilgi ve hizmet erişimini kolaylaştırmayı hedefleyen ürün çalışması.',
    problem: 'Üreticinin bilgi, destek ve dijital hizmetlere erişimi dağınık kanallarda gerçekleşir. Proje, temel kullanıcı senaryolarını tek mobil ürün fikrinde toplar.',
    flow: ['Producer need', 'Mobile interaction', 'Agricultural data / service', 'Decision support', 'Action / follow-up'],
    contributions: ['Saha problemi ve üretici kullanıcı akışının ürün gereksinimlerine dönüştürülmesi.', 'Tarım teknolojileri bağlamında mobil karar desteği ve hizmet erişimi tasarımı.'],
    result: 'Teknofest finalistliği elde eden ürün/proje çalışması.',
    metric: 'Finalist', metricLabel: 'Teknofest', tech: ['Product Design', 'Mobile', 'AgriTech', 'Decision Support'], link: null,
    note: 'Güncel kod deposu ve üretim durumu herkese açık kaynakta doğrulanmamıştır.'
  },
  {
    id: 'gesture-fighter', title: 'Gesture Street Fighter', kicker: 'Computer Vision · Game Control', status: 'Vision prototype',
    categories: ['vision', 'game'], archiveCategories: ['ai', 'mobile'],
    summary: 'Kamera üzerinden algılanan vücut/el hareketlerini oyun komutlarına dönüştüren temassız kontrol deneyi.',
    problem: 'Doğal hareketi kararlı oyun girdisine çevirmek, poz tespiti, eşikleme ve yanlış tetiklemeyi azaltan durum mantığı gerektirir.',
    flow: ['Camera frames', 'Landmark detection', 'Gesture classification', 'Key mapping', 'Game action'],
    contributions: ['Görüntü landmark’larından oyun hareketi sınıfları üretme.', 'Algılanan jestleri gecikmesi düşük klavye/oyun komutlarına eşleme.'],
    result: 'Bilgisayarlı görü ile insan–bilgisayar etkileşimini birleştiren eğlenceli prototip.',
    metric: 'Live', metricLabel: 'gesture control', tech: ['Python', 'OpenCV', 'Pose / Hand Tracking', 'Game Automation'], link: null,
    note: 'Farklı ışık ve kullanıcı koşullarında kapsamlı benchmark dokümante edilmemiştir.'
  },
  {
    id: 'monkey-pose', title: 'Monkey Pose Mimic', kicker: 'Pose Estimation · Interactive AI', status: 'Open source',
    categories: ['vision'], archiveCategories: ['ai', 'mobile'],
    summary: 'MediaPipe ve OpenCV ile kullanıcının pozunu referans hareketle karşılaştıran etkileşimli bilgisayarlı görü deneyi.',
    problem: 'Poz benzerliğini ölçmek; farklı vücut ölçülerini normalize etmeyi ve landmark ilişkilerini açı/mesafe üzerinden karşılaştırmayı gerektirir.',
    flow: ['Webcam frame', 'MediaPipe landmarks', 'Pose normalization', 'Similarity score', 'Visual feedback'],
    contributions: ['Kamera akışından gerçek zamanlı iskelet landmark çıkarımı.', 'Normalize edilmiş poz temsili üzerinden benzerlik ve geri bildirim üretimi.'],
    result: 'Gerçek zamanlı pose estimation ve etkileşimli geri bildirim üzerine açık kaynak mini proje.',
    metric: '33', metricLabel: 'pose landmarks', tech: ['Python', 'MediaPipe', 'OpenCV', 'Pose Estimation'],
    link: 'https://github.com/TITANBGG/monkey_pose_mimic', linkLabel: 'GitHub deposu',
    note: 'Profesyonel hareket analizi veya sağlık ölçümü değildir.'
  },
  {
    id: 'parking-sensor', title: 'Arduino Akıllı Park Sensörü', kicker: 'Embedded Systems · IoT', status: 'Hardware prototype',
    categories: ['iot', 'software'], archiveCategories: ['iot'],
    summary: 'HC-SR04 mesafe sensörüyle yakınlığı ölçüp buzzer üzerinden kademeli sesli uyarı veren Arduino prototipi.',
    problem: 'Ham ultrasonik ölçümü sürücünün anında anlayacağı kademeli uyarıya çevirmek için mesafe filtreleme ve zamanlama gerekir.',
    flow: ['HC-SR04 trigger', 'Echo duration', 'Distance calculation', 'Threshold mapping', 'Buzzer alert'],
    contributions: ['Echo süresinden santimetre cinsinden mesafe hesaplama.', 'Mesafe azaldıkça uyarı sıklığını değiştiren non-blocking buzzer mantığı.'],
    result: 'Sensör okuma, eşikleme ve fiziksel çıktı kontrolünü gösteren gömülü sistem projesi.',
    metric: 'HC-SR04', metricLabel: 'ultrasonic sensing', tech: ['Arduino', 'C/C++', 'HC-SR04', 'Buzzer', 'Embedded'], link: null,
    note: 'Otomotiv sınıfı güvenlik donanımı değildir.'
  },
  {
    id: 'clinical-report-agent', title: 'AutoClinicalReportAgent', kicker: 'Agentic AI · Clinical Documentation', status: 'Open source exploration',
    categories: ['health', 'genai', 'nlp'], archiveCategories: ['ai'],
    summary: 'Klinik girdiyi yapılandırılmış rapor taslağına dönüştürmeye odaklanan ajan tabanlı medikal dokümantasyon çalışması.',
    problem: 'Serbest klinik notları standart başlıklara ayırmak ve eksik bilgiyi görünür kılmak manuel zaman gerektirir.',
    flow: ['Clinical input', 'Section extraction', 'Agent orchestration', 'Structured draft', 'Human review'],
    contributions: ['Klinik metni bölüm ve alanlara ayıran yapılandırılmış çıktı yaklaşımı.', 'Rapor üretimini insan incelemesine bırakan ajan tabanlı dokümantasyon akışı.'],
    result: 'Klinik metin otomasyonu üzerine açık kaynak keşif projesi.',
    metric: 'Agent', metricLabel: 'report workflow', tech: ['Python', 'LLM Agents', 'Clinical NLP', 'Structured Output'],
    link: 'https://github.com/TITANBGG/AutoClinicalReportAgent', linkLabel: 'GitHub deposu',
    note: 'Doktor onayı olmadan klinik kayıt olarak kullanılmamalıdır.'
  },
  {
    id: 'disinformation', title: 'Dezenformasyon Bültenleri', kicker: 'NLP · Information Integrity', status: 'Data exploration',
    categories: ['nlp'], archiveCategories: ['ai'],
    summary: 'Dezenformasyon bültenlerindeki metinleri toplama, düzenleme ve analiz edilebilir veri yapısına dönüştürme çalışması.',
    problem: 'Bülten içerikleri farklı metin yapılarında yayımlandığı için karşılaştırmalı analizden önce ortak şemaya dönüştürülmelidir.',
    flow: ['Bulletin sources', 'Collection', 'Text cleaning', 'Structured records', 'Analysis-ready dataset'],
    contributions: ['Bülten metinlerini tekrar kullanılabilir veri kayıtlarına dönüştüren Python işleme akışı.', 'Sonraki sınıflandırma ve tema analizi için temiz veri tabanı hazırlığı.'],
    result: 'Bilgi bütünlüğü ve metin verisi hazırlama üzerine açık kaynak keşif deposu.',
    metric: 'Text', metricLabel: 'data pipeline', tech: ['Python', 'NLP', 'Data Cleaning', 'Text Analysis'],
    link: 'https://github.com/TITANBGG/dezenformasyon-bultenleri', linkLabel: 'GitHub deposu',
    note: 'Otomatik doğruluk/hakikat kararı veren bir sistem değildir.'
  },
  {
    id: 'cat-gatekeeper', title: 'Cat Window Gatekeeper', kicker: 'Edge Vision · Home Automation', status: 'Open source experiment',
    categories: ['vision', 'iot'], archiveCategories: ['ai', 'iot'],
    summary: 'Pencere girişini kamera üzerinden izleyip kedi varlığını algılamaya yönelik bilgisayarlı görü ve otomasyon deneyi.',
    problem: 'Ev içi kamera otomasyonunda yanlış tetiklemeyi azaltmak ve algıyı fiziksel aksiyondan güvenli biçimde ayırmak gerekir.',
    flow: ['Window camera', 'Frame preprocessing', 'Cat detection', 'Decision threshold', 'Gate / notification action'],
    contributions: ['Kamera görüntüsünden hedef nesne varlığı çıkaran Python prototipi.', 'Algılama kararını otomasyon/uyarı katmanına bağlayan gatekeeper fikri.'],
    result: 'Edge vision ve ev otomasyonu kesişimindeki açık kaynak mini deney.',
    metric: 'Edge', metricLabel: 'vision trigger', tech: ['Python', 'Computer Vision', 'Automation', 'Camera'],
    link: 'https://github.com/TITANBGG/Cat-window-gatekeeper', linkLabel: 'GitHub deposu',
    note: 'Evcil hayvan güvenliği için tek kontrol mekanizması olarak kullanılmamalıdır.'
  },
  {
    id: 'rocket-model', title: 'Alçak İrtifa Roket Modeli', kicker: 'TÜBİTAK · Aerospace', status: 'Student science project',
    categories: ['science'], archiveCategories: ['science'],
    summary: 'Lise döneminde TÜBİTAK ve bağışçı desteğiyle yürütülen alçak irtifa roket modeli geliştirme çalışması.',
    problem: 'Roket modeli; kütle merkezi, aerodinamik kararlılık, malzeme ve güvenli fırlatma gereksinimlerini birlikte ele alır.',
    flow: ['Requirements', 'Body / fin design', 'Material selection', 'Assembly', 'Controlled test'],
    contributions: ['Model tasarımı, malzeme ve üretim kararlarına katılım.', 'Takım ve dış destekçilerle fiziksel prototip geliştirme deneyimi.'],
    result: 'Yazılım öncesi mühendislik merakını ve fiziksel prototipleme geçmişini gösteren öğrenci projesi.',
    metric: 'STEM', metricLabel: 'physical prototype', tech: ['Model Rocketry', 'Aerodynamics', 'Prototyping', 'Teamwork'], link: null,
    note: 'Öğrenci bilim projesidir; uçuş sertifikasyonu içermez.'
  },
  {
    id: 'biogas', title: 'Biyogaz Projesi', kicker: 'TÜBİTAK · Renewable Energy', status: 'Student science project',
    categories: ['science'], archiveCategories: ['science'],
    summary: 'Biyolojik atıklardan anaerobik süreçle biyogaz elde edilmesini inceleyen yenilenebilir enerji çalışması.',
    problem: 'Organik atığın enerjiye dönüşümü; hammadde seçimi, oksijensiz ortam, sıcaklık ve gaz gözlemini gerektirir.',
    flow: ['Organic waste', 'Anaerobic environment', 'Decomposition', 'Gas formation', 'Observation'],
    contributions: ['Biyogaz üretim sürecinin deney düzeneği üzerinde araştırılması.', 'Atık yönetimi ve yenilenebilir enerji ilişkisinin bilimsel proje formatında sunulması.'],
    result: 'Enerji ve sürdürülebilirlik alanındaki erken dönem TÜBİTAK bilimsel çalışma.',
    metric: 'Bio', metricLabel: 'renewable energy', tech: ['Biogas', 'Anaerobic Digestion', 'Experiment Design'], link: null,
    note: 'Laboratuvar/öğrenci ölçeğinde bilimsel projedir.'
  },
  {
    id: 'invisible-ink', title: 'Görünmez Mürekkep Araştırması', kicker: 'TÜBİTAK 4006/4009 · Chemistry', status: 'Student science project',
    categories: ['science'], archiveCategories: ['science'],
    summary: 'Farklı kimyasal bileşenlerle görünmez yazı üretimi ve uygun ortaya çıkarma yöntemlerini inceleyen deneysel çalışma.',
    problem: 'Görünmez mürekkep; kuruduğunda görünmeyen fakat ısı veya kimyasal tepkimeyle güvenli biçimde ortaya çıkan bir bileşim gerektirir.',
    flow: ['Material selection', 'Ink preparation', 'Surface application', 'Drying', 'Reveal / compare'],
    contributions: ['Farklı karışım ve yüzey kombinasyonlarının deneysel karşılaştırılması.', 'Gözlem sonuçlarının TÜBİTAK proje sunumuna dönüştürülmesi.'],
    result: 'Kimya, deney tasarımı ve bilim iletişimi alanındaki erken dönem proje.',
    metric: 'R&D', metricLabel: 'chemistry experiment', tech: ['Chemistry', 'Experiment Design', 'Scientific Method'], link: null,
    note: 'Öğrenci düzeyinde deneysel araştırmadır.'
  }
];

const allProjects = featuredProjects;

const header = document.querySelector('[data-header]');
const grid = document.querySelector('[data-project-grid]');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const searchInput = document.querySelector('[data-search]');
const resultCount = document.querySelector('[data-result-count]');
const emptyState = document.querySelector('[data-empty]');
const archiveGrid = document.querySelector('[data-archive-grid]');
const archiveFilterButtons = [...document.querySelectorAll('[data-archive-filter]')];
const archiveSearchInput = document.querySelector('[data-archive-search]');
const archiveResultCount = document.querySelector('[data-archive-result-count]');
const archiveEmptyState = document.querySelector('[data-archive-empty]');
const dialog = document.querySelector('[data-case-dialog]');
const dialogContent = document.querySelector('[data-dialog-content]');
const dialogIndex = document.querySelector('[data-dialog-index]');
const dialogClose = document.querySelector('[data-dialog-close]');
const pointerAura = document.querySelector('[data-pointer-aura]');
const pageProgress = document.querySelector('[data-page-progress]');
const heroConsole = document.querySelector('.hero-console');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const quest = document.querySelector('[data-quest]');
const questWorld = document.querySelector('[data-quest-world]');
const questKnight = document.querySelector('[data-quest-knight]');
const questMonster = document.querySelector('[data-quest-monster]');
const questSpark = document.querySelector('[data-quest-spark]');
const questKills = document.querySelector('[data-quest-kills]');
const questStatus = document.querySelector('[data-quest-status]');
const questToggle = document.querySelector('[data-quest-toggle]');

let activeFilter = 'all';
let activeArchiveFilter = 'all';
let lastTrigger = null;

const normalize = (value) => value
  .toLocaleLowerCase('tr-TR')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

const pad = (number) => String(number).padStart(2, '0');

function categoryLabel(category) {
  return ({
    health: 'Health AI', vision: 'Vision', genai: 'GenAI', nlp: 'NLP', fullstack: 'Full-stack',
    software: 'Software', mobile: 'Mobile', game: 'Game', iot: 'IoT', science: 'Science',
    blockchain: 'Blockchain', research: 'Research'
  })[category] || category;
}

function projectCard(project, index) {
  const link = project.link
    ? `<a class="card-repo" href="${project.link}" target="_blank" rel="noreferrer" aria-label="${project.title} bağlantısını aç">Repo ↗</a>`
    : '<span class="card-private">Dokümante vaka</span>';

  return `
    <article class="case-card ${project.featured ? 'is-featured' : ''}" data-project-id="${project.id}">
      <div class="card-topline">
        <span>${pad(index + 1)} / 12</span>
        ${link}
      </div>
      <div class="card-category-row">${project.categories.slice(0, 3).map((cat) => `<span>${categoryLabel(cat)}</span>`).join('')}</div>
      <div class="card-copy">
        <p class="card-kicker">${project.kicker}</p>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
      </div>
      <div class="card-metric"><strong>${project.metric}</strong><span>${project.metricLabel}</span></div>
      <div class="card-stack">${project.tech.slice(0, 5).map((tech) => `<span>${tech}</span>`).join('')}</div>
      <button class="case-open" type="button" data-open-case="${project.id}"><span>Teknik vakayı aç</span><span aria-hidden="true">↗</span></button>
    </article>`;
}

function renderProjects(items = featuredProjects) {
  if (!grid || !resultCount || !emptyState) return;
  grid.innerHTML = items.map((project) => projectCard(project, featuredProjects.indexOf(project))).join('');
  resultCount.textContent = items.length;
  emptyState.hidden = items.length !== 0;
  bindCaseButtons(grid);
  bindInteractiveCards(grid);
  requestAnimationFrame(() => {
    grid.querySelectorAll('.case-card').forEach((card, index) => {
      card.style.setProperty('--delay', `${Math.min(index * 45, 270)}ms`);
      card.classList.add('is-visible');
    });
  });
}

function applyFilters() {
  if (!searchInput) return;
  const query = normalize(searchInput.value.trim());
  const matches = featuredProjects.filter((project) => {
    const categoryMatch = activeFilter === 'all' || project.categories.includes(activeFilter);
    const haystack = normalize([
      project.title, project.kicker, project.summary, project.problem, project.status,
      project.tech.join(' '), project.contributions.join(' '), project.result
    ].join(' '));
    return categoryMatch && (!query || haystack.includes(query));
  });
  renderProjects(matches);
}

function updateFilterCounts() {
  document.querySelectorAll('[data-filter-count]').forEach((counter) => {
    const category = counter.dataset.filterCount;
    counter.textContent = category === 'all' ? featuredProjects.length : featuredProjects.filter((project) => project.categories.includes(category)).length;
  });
}

function archiveCard(project) {
  const globalIndex = allProjects.indexOf(project) + 1;
  const link = project.link
    ? `<a class="card-repo" href="${project.link}" target="_blank" rel="noreferrer" aria-label="${project.title} bağlantısını aç">Repo ↗</a>`
    : '<span class="card-private">Arşiv vakası</span>';
  return `
    <article class="archive-card" data-project-id="${project.id}">
      <div class="card-topline"><span>${pad(globalIndex)} / ${allProjects.length}</span>${link}</div>
      <p class="archive-kicker">${project.kicker}</p>
      <h4>${project.title}</h4>
      <p>${project.summary}</p>
      <div class="archive-stack">${project.tech.slice(0, 4).map((tech) => `<span>${tech}</span>`).join('')}</div>
      <button class="archive-open" type="button" data-open-case="${project.id}"><span>Teknik detayı aç</span><span aria-hidden="true">↗</span></button>
    </article>`;
}

function renderArchive(items = archiveProjects) {
  if (!archiveGrid || !archiveResultCount || !archiveEmptyState) return;
  archiveGrid.innerHTML = items.map(archiveCard).join('');
  archiveResultCount.textContent = items.length;
  archiveEmptyState.hidden = items.length !== 0;
  bindCaseButtons(archiveGrid);
  bindInteractiveCards(archiveGrid);
}

function applyArchiveFilters() {
  if (!archiveSearchInput) return;
  const query = normalize(archiveSearchInput.value.trim());
  const matches = archiveProjects.filter((project) => {
    const categoryMatch = activeArchiveFilter === 'all' || project.archiveCategories.includes(activeArchiveFilter);
    const haystack = normalize([
      project.title, project.kicker, project.summary, project.problem, project.status,
      project.tech.join(' '), project.contributions.join(' '), project.result
    ].join(' '));
    return categoryMatch && (!query || haystack.includes(query));
  });
  renderArchive(matches);
}

function updateArchiveCounts() {
  document.querySelectorAll('[data-archive-count]').forEach((counter) => {
    const category = counter.dataset.archiveCount;
    counter.textContent = category === 'all'
      ? archiveProjects.length
      : archiveProjects.filter((project) => project.archiveCategories.includes(category)).length;
  });
}

function openCase(projectId, trigger) {
  const project = allProjects.find((item) => item.id === projectId);
  if (!project) return;
  lastTrigger = trigger;
  const projectNumber = allProjects.indexOf(project) + 1;
  dialogIndex.textContent = `PROJECT ${pad(projectNumber)} / ${allProjects.length} · ${project.status}`;
  const externalLink = project.link
    ? `<a class="dialog-link" href="${project.link}" target="_blank" rel="noreferrer">${project.linkLabel} <span aria-hidden="true">↗</span></a>`
    : '<span class="dialog-link is-muted">Herkese açık depo bağlantısı yok</span>';

  dialogContent.innerHTML = `
    <header class="case-header">
      <p class="eyebrow">${project.kicker}</p>
      <h2 id="case-title">${project.title}</h2>
      <p>${project.summary}</p>
      <div class="dialog-actions">${externalLink}<span class="status-pill">${project.status}</span></div>
    </header>
    <div class="case-section">
      <p class="case-label">PROBLEM / AMAÇ</p>
      <p class="case-problem">${project.problem}</p>
    </div>
    <div class="case-section">
      <p class="case-label">MİMARİ AKIŞ</p>
      <ol class="architecture-flow">${project.flow.map((step) => `<li><span>${step}</span></li>`).join('')}</ol>
    </div>
    <div class="case-detail-grid">
      <div class="case-section">
        <p class="case-label">TEKNİK KATKILAR</p>
        <ul class="contribution-list">${project.contributions.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
      <aside class="case-aside">
        <div class="result-card">
          <span>SONUÇ / STATÜ</span>
          <strong>${project.metric}</strong>
          <small>${project.metricLabel}</small>
          <p>${project.result}</p>
        </div>
        <div class="stack-block">
          <p class="case-label">TEKNOLOJİ YIĞINI</p>
          <div class="dialog-stack">${project.tech.map((tech) => `<span>${tech}</span>`).join('')}</div>
        </div>
      </aside>
    </div>
    <div class="case-note"><strong>Sınır:</strong> ${project.note}</div>`;

  dialog.showModal();
  document.body.classList.add('dialog-open');
}

function closeCase() {
  dialog.close();
  document.body.classList.remove('dialog-open');
  if (lastTrigger) lastTrigger.focus();
}

function bindCaseButtons(container) {
  container.querySelectorAll('[data-open-case]').forEach((button) => {
    button.addEventListener('click', () => openCase(button.dataset.openCase, button));
  });
}

function bindInteractiveCards(container) {
  if (reducedMotion.matches || !finePointer.matches) return;
  container.querySelectorAll('.case-card, .archive-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 5;
      const rotateX = ((y / rect.height) - 0.5) * -5;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
      card.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`);
      card.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

function bindHeroConsole() {
  if (!heroConsole || reducedMotion.matches || !finePointer.matches) return;
  heroConsole.addEventListener('pointermove', (event) => {
    const rect = heroConsole.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroConsole.style.setProperty('--console-rx', `${(-y * 5).toFixed(2)}deg`);
    heroConsole.style.setProperty('--console-ry', `${(x * 6).toFixed(2)}deg`);
  });
  heroConsole.addEventListener('pointerleave', () => {
    heroConsole.style.setProperty('--console-rx', '0deg');
    heroConsole.style.setProperty('--console-ry', '0deg');
  });
}

function bindPointerAura() {
  if (!pointerAura || reducedMotion.matches || !finePointer.matches) return;
  let frame = 0;
  window.addEventListener('pointermove', (event) => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      document.body.classList.add('has-pointer');
      pointerAura.style.setProperty('--pointer-x', `${event.clientX}px`);
      pointerAura.style.setProperty('--pointer-y', `${event.clientY}px`);
    });
  }, { passive: true });
}

function animateCounters() {
  const counters = document.querySelectorAll('[data-count-to]');
  if (reducedMotion.matches) return;
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const target = Number(counter.dataset.countTo);
      const padLength = Number(counter.dataset.countPad || 0);
      const startedAt = performance.now();
      const duration = 850;
      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = String(Math.round(target * eased)).padStart(padLength, '0');
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(counter);
    });
  }, { threshold: 0.55 });
  counters.forEach((counter) => counterObserver.observe(counter));
}

function initMiniQuest() {
  if (!quest || !questWorld || !questKnight || !questMonster || !questToggle) return;

  let running = false;
  let frameId = 0;
  let lastTime = 0;
  let monsterX = 0;
  let phase = 'approach';
  let phaseUntil = 0;
  let kills = 0;

  const collisionPoint = () => questWorld.clientWidth < 340 ? 88 : 119;

  function resetMonster() {
    monsterX = questWorld.clientWidth + 18;
    phase = 'approach';
    questMonster.classList.remove('is-hit');
    questKnight.classList.remove('is-attacking');
    questSpark.classList.remove('is-active');
    questMonster.style.setProperty('--monster-x', `${monsterX}px`);
    questStatus.textContent = 'RUNNING';
  }

  function defeatMonster(now) {
    phase = 'defeat';
    phaseUntil = now + 720;
    kills += 1;
    questKills.textContent = kills;
    questStatus.textContent = 'CRITICAL HIT';
    questKnight.classList.add('is-attacking');
    questMonster.classList.add('is-hit');
    questSpark.classList.remove('is-active');
    void questSpark.offsetWidth;
    questSpark.classList.add('is-active');
  }

  function update(now) {
    if (!running) return;
    const delta = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 0;
    lastTime = now;

    if (phase === 'approach') {
      const speed = questWorld.clientWidth < 340 ? 47 : 57;
      monsterX -= speed * delta;
      questMonster.style.setProperty('--monster-x', `${monsterX}px`);
      if (monsterX <= collisionPoint()) defeatMonster(now);
    } else if (phase === 'defeat' && now >= phaseUntil) {
      resetMonster();
    }

    frameId = requestAnimationFrame(update);
  }

  function setRunning(next) {
    running = next;
    quest.classList.toggle('is-paused', !running);
    questToggle.textContent = running ? 'Durdur' : 'Başlat';
    questToggle.setAttribute('aria-pressed', String(!running));
    questToggle.setAttribute('aria-label', running ? 'Şövalye animasyonunu durdur' : 'Şövalye animasyonunu başlat');
    if (!running) {
      cancelAnimationFrame(frameId);
      questStatus.textContent = 'PAUSED';
      return;
    }
    lastTime = 0;
    questStatus.textContent = phase === 'defeat' ? 'CRITICAL HIT' : 'RUNNING';
    frameId = requestAnimationFrame(update);
  }

  questToggle.addEventListener('click', () => setRunning(!running));
  window.addEventListener('resize', () => {
    if (monsterX > questWorld.clientWidth + 30 || monsterX < collisionPoint()) resetMonster();
  }, { passive: true });
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) setRunning(false);
  });

  resetMonster();
  setRunning(!reducedMotion.matches);
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    applyFilters();
  });
});

if (searchInput) searchInput.addEventListener('input', applyFilters);
archiveFilterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeArchiveFilter = button.dataset.archiveFilter;
    archiveFilterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    applyArchiveFilters();
  });
});
if (archiveSearchInput) archiveSearchInput.addEventListener('input', applyArchiveFilters);
if (dialogClose) dialogClose.addEventListener('click', closeCase);
if (dialog) {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeCase();
  });
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px' });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
const yearSlot = document.querySelector('[data-year]');
if (yearSlot) yearSlot.textContent = new Date().getFullYear();

function updateViewportState() {
  if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  if (pageProgress) pageProgress.style.setProperty('--scroll-progress', progress.toFixed(4));
}

updateFilterCounts();
renderProjects();
if (archiveGrid) {
  updateArchiveCounts();
  renderArchive();
}
bindHeroConsole();
bindPointerAura();
animateCounters();
initMiniQuest();
updateViewportState();
window.addEventListener('scroll', updateViewportState, { passive: true });
