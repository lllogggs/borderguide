import { Country } from './types';

export const COUNTRIES: Country[] = [
  {
    id: 'jp',
    name: '일본',
    engName: 'Japan',
    flag: '🇯🇵',
    visaStatus: '무비자 90일',
    entryRequirement: 'Visit Japan Web',
    imageUrl: 'https://picsum.photos/seed/japan/800/600',
    timeDiff: '없음',
    voltage: '110V (돼지코 필수)',
    currency: 'JPY (엔)',
    flightTime: '약 2시간',
    visaDetailTitle: 'VISA FREE',
    visaDetailDesc: '대한민국 여권 소지자는 관광 목적으로 최대 90일간 비자 없이 체류할 수 있습니다.',
    timeline: [
      { day: 'D-7', label: '여권 유효기간 확인', desc: '체류 예정 기간보다 유효기간이 더 남아있는지 확인하세요.' },
      { day: 'D-3', label: 'Visit Japan Web 등록', desc: '검역, 입국심사, 세관신고를 한 번에 등록하세요.', actionLabel: '등록하기', actionUrl: '#' },
      { day: '입국 당일', label: 'QR 코드 준비', desc: '입국 심사 시 생성된 QR코드를 제시하세요.' }
    ],
    alerts: ['금제품 반입 주의 (육류 가공품 등)', '110V 어댑터 필수 지참']
  },
  {
    id: 'vn',
    name: '베트남',
    engName: 'Vietnam',
    flag: '🇻🇳',
    visaStatus: '무비자 45일',
    entryRequirement: '입국서류 없음',
    imageUrl: 'https://picsum.photos/seed/vietnam/800/600',
    timeDiff: '-2시간',
    voltage: '220V (한국과 동일)',
    currency: 'VND (동)',
    flightTime: '약 5시간',
    visaDetailTitle: 'VISA FREE',
    visaDetailDesc: '최대 45일간 무비자 체류가 가능합니다. (2026년 기준)',
    timeline: [
      { day: 'D-30', label: '여권 유효기간 확인', desc: '입국일 기준 6개월 이상 잔여 유효기간 필수입니다.' },
      { day: 'D-1', label: '리턴 티켓 준비', desc: '입국 심사 시 귀국 항공권을 요구할 수 있습니다.' },
      { day: '입국 당일', label: '입국 심사', desc: '별도의 입국 신고서 작성 없이 여권만 제출하세요.' }
    ],
    alerts: ['입국 시 6개월 이상 여권 유효기간 필수', '오토바이 날치기 주의']
  },
  {
    id: 'cn',
    name: '중국',
    engName: 'China',
    flag: '🇨🇳',
    visaStatus: '무비자 30일',
    entryRequirement: '여권만 지참',
    imageUrl: 'https://picsum.photos/seed/china/800/600',
    timeDiff: '-1시간',
    voltage: '220V (다양한 플러그)',
    currency: 'CNY (위안)',
    flightTime: '약 2~3시간',
    visaDetailTitle: 'VISA FREE (TEMP)',
    visaDetailDesc: '2026년 한시적 무비자 정책으로 30일간 관광 입국이 가능합니다.',
    timeline: [
      { day: 'D-7', label: '알리페이/위챗페이 설정', desc: '현금 사용이 어려운 곳이 많으므로 미리 카드를 등록하세요.', actionLabel: '가이드 보기', actionUrl: '#' },
      { day: '입국 당일', label: '입국 카드 작성 불필요', desc: '무비자 입국 시 입국 카드 작성이 간소화되었습니다.' }
    ],
    alerts: ['VPN 준비 권장 (구글/카톡 사용 제한)', '호텔 투숙 시 주숙등기 자동 처리 여부 확인']
  },
  {
    id: 'th',
    name: '태국',
    engName: 'Thailand',
    flag: '🇹🇭',
    visaStatus: '무비자 90일',
    entryRequirement: '입국서류 없음',
    imageUrl: 'https://picsum.photos/seed/thailand/800/600',
    timeDiff: '-2시간',
    voltage: '220V (한국과 동일)',
    currency: 'THB (바트)',
    flightTime: '약 5.5시간',
    visaDetailTitle: 'VISA FREE',
    visaDetailDesc: '관광 목적으로 최대 90일 무비자 체류 가능합니다.',
    timeline: [
      { day: 'D-14', label: '숙소 예약 바우처', desc: '입국 심사 시 숙소 정보를 물어볼 수 있습니다.' },
      { day: '입국 당일', label: '여권 심사', desc: '입국 신고서가 폐지되었습니다. 여권만 제출하세요.' }
    ],
    alerts: ['전자담배 반입 절대 금지 (벌금형)', '대마 성분 음식 주의']
  },
  {
    id: 'ph',
    name: '필리핀',
    engName: 'Philippines',
    flag: '🇵🇭',
    visaStatus: '무비자 30일',
    entryRequirement: 'eTravel 필수',
    imageUrl: 'https://picsum.photos/seed/philippines/800/600',
    timeDiff: '-1시간',
    voltage: '220V (110V 모양 혼용)',
    currency: 'PHP (페소)',
    flightTime: '약 4시간',
    visaDetailTitle: 'VISA FREE',
    visaDetailDesc: '30일 무비자 입국 가능하며, 도착 후 비자 연장도 가능합니다.',
    timeline: [
      { day: 'D-3', label: 'eTravel 등록', desc: '출국 72시간 전부터 등록 가능합니다. 무료입니다.', actionLabel: '작성하기', actionUrl: '#' },
      { day: '입국 당일', label: 'QR 코드 캡처', desc: '데이터가 안 터질 수 있으니 QR코드를 미리 캡처하세요.' }
    ],
    alerts: ['면세 한도 엄격함', 'eTravel 사칭 유료 사이트 주의']
  },
  {
    id: 'tw',
    name: '대만',
    engName: 'Taiwan',
    flag: '🇹🇼',
    visaStatus: '무비자 90일',
    entryRequirement: '온라인 입국서(권장)',
    imageUrl: 'https://picsum.photos/seed/taiwan/800/600',
    timeDiff: '-1시간',
    voltage: '110V (돼지코 필수)',
    currency: 'TWD (대만달러)',
    flightTime: '약 2.5시간',
    visaDetailTitle: 'VISA FREE',
    visaDetailDesc: '90일간 무비자 체류가 가능합니다.',
    timeline: [
      { day: 'D-7', label: '여행지원금 신청', desc: '대만 관광청 여행지원금(럭키드로우) 신청을 잊지 마세요.', actionLabel: '신청하기', actionUrl: '#' },
      { day: 'D-1', label: '온라인 입국신고서', desc: '기내에서 종이를 쓰기 싫다면 미리 온라인으로 작성하세요.', actionLabel: '작성하기', actionUrl: '#' }
    ],
    alerts: ['육가공품 반입 절대 금지', 'MRT(지하철) 내 음식물 섭취 금지']
  },
  {
    id: 'us',
    name: '미국',
    engName: 'USA',
    flag: '🇺🇸',
    visaStatus: '무비자 90일',
    entryRequirement: 'ESTA 필수 ($21)',
    imageUrl: 'https://picsum.photos/seed/usa/800/600',
    timeDiff: '-13~16시간',
    voltage: '110V (돼지코 필수)',
    currency: 'USD (달러)',
    flightTime: '약 10~14시간',
    visaDetailTitle: 'ESTA REQUIRED',
    visaDetailDesc: '비자 면제 프로그램(VWP)을 이용하려면 ESTA 승인이 필수입니다.',
    timeline: [
      { day: 'D-14', label: 'ESTA 신청', desc: '최소 72시간 전 신청 필수이나, 거절 대비 2주 전 권장합니다.', actionLabel: '공식 신청', actionUrl: '#' },
      { day: 'D-1', label: '숙소 주소 영문 확인', desc: '입국 심사가 까다로우니 숙소 바우처를 인쇄하세요.' }
    ],
    alerts: ['입국 심사 시 귀국 티켓 필수 제시', '팁 문화 (15~20%)']
  },
  {
    id: 'au',
    name: '호주',
    engName: 'Australia',
    flag: '🇦🇺',
    visaStatus: '무비자 90일',
    entryRequirement: 'ETA 앱 신청 필수',
    imageUrl: 'https://picsum.photos/seed/australia/800/600',
    timeDiff: '+1~2시간',
    voltage: '240V (삼발이 어댑터)',
    currency: 'AUD (호주달러)',
    flightTime: '약 10시간',
    visaDetailTitle: 'ETA REQUIRED',
    visaDetailDesc: '전자여행허가(ETA)를 모바일 앱으로 반드시 사전 승인 받아야 합니다.',
    timeline: [
      { day: 'D-14', label: 'ETA 앱 설치 및 신청', desc: 'Australian ETA 앱을 통해서만 신청 가능합니다.', actionLabel: '앱스토어', actionUrl: '#' },
      { day: '입국 당일', label: '스마트게이트 이용', desc: '한국 여권 소지자는 자동 입국 심사대를 이용할 수 있습니다.' }
    ],
    alerts: ['음식물/의약품 반입 검사 매우 엄격', '자외선 차단제 필수']
  },
  {
    id: 'id',
    name: '인도네시아',
    engName: 'Indonesia',
    flag: '🇮🇩',
    visaStatus: '도착비자 (유료)',
    entryRequirement: 'e-VoA (권장)',
    imageUrl: 'https://picsum.photos/seed/indonesia/800/600',
    timeDiff: '-2시간 (자카르타)',
    voltage: '220V (한국과 동일)',
    currency: 'IDR (루피아)',
    flightTime: '약 7시간 (발리)',
    visaDetailTitle: 'VISA ON ARRIVAL',
    visaDetailDesc: '입국 시 도착비자($35 정도)를 구매해야 합니다. 사전에 e-VoA 신청도 가능합니다.',
    timeline: [
      { day: 'D-5', label: 'e-VoA 신청 (선택)', desc: '공항 대기 시간을 줄이려면 미리 온라인 비자를 신청하세요.', actionLabel: '신청하기', actionUrl: '#' },
      { day: 'D-2', label: '전자 세관 신고(ECD)', desc: '출발 2일 전부터 QR코드 발급이 가능합니다. 필수입니다.', actionLabel: '신청하기', actionUrl: '#' },
      { day: 'D-1', label: '관광세 납부 (발리)', desc: '발리 입국 시 관광세(150,000 IDR)를 납부해야 합니다.' }
    ],
    alerts: ['발리 관광세 별도', '물갈이(Bali Belly) 주의']
  }
];
