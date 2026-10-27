export type FacilityId = 'net-1' | 'net-2' | 'net-3' | 'net-4' | 'net-5' | 'coaching-lane'

export interface FacilitySpec {
  label: string
  value: string
}

export interface Facility {
  id: FacilityId
  number: string
  name: string
  shortName: string
  category: string
  tag: string
  dimensions: string
  surface: string
  equipment: string[]
  suitableFor: string[]
  adultRate: number
  juniorRate: number
  coachRate: number
  description: string
  details: string
  specs: FacilitySpec[]
  hotspot: {
    polygon: string
    center: { x: number; y: number }
  }
}

export interface FirstFloorArea {
  id: string
  name: string
  tag: string
  description: string
  features: string[]
  usage: string
  specs: string
}

export interface BookingResource {
  id: 'main-hall-net' | 'bowling-machine-lane'
  name: string
  subtitle: string
  adultRate: number
  juniorRate: number
  description: string
  laneIds: FacilityId[]
}

export interface LeagueTeam {
  rank: number
  team: string
  played: number
  won: number
  lost: number
  points: number
  netRunRate?: string
}

export interface LeagueDivision {
  id: string
  name: string
  season: string
  format: string
  overview: string
  teams: LeagueTeam[]
}

export const facilities: Facility[] = [
  {
    id: 'net-1',
    number: '01',
    name: 'Indoor Cricket Net 1',
    shortName: 'Net 1',
    category: 'Indoor Cricket Net',
    tag: 'FULL LENGTH · RUN-UP',
    dimensions: '36.6 m × 3.6 m',
    surface: 'High-density indoor synthetic cricket turf',
    equipment: ['Full-length synthetic pitch', 'Batting & bowling crease markings', 'Enclosed mesh netting', 'Portable batting stanchions'],
    suitableFor: ['Club net sessions', 'Individual batting & bowling practice', 'Private 1-on-1 coaching', 'Junior skill development'],
    adultRate: 25,
    juniorRate: 23,
    coachRate: 19,
    description: 'Front-lane indoor net in the Main Hall with full-length run-up and direct floor-level access.',
    details: 'Net 1 provides 36.6 metres of unobstructed length and 3.6 metres width, bounded by heavy-gauge safety netting. Fitted with regulation batting and bowling creases.',
    specs: [
      { label: 'Length', value: '36.6 m' },
      { label: 'Width', value: '3.6 m' },
      { label: 'Creases', value: 'Regulation indoor' },
      { label: 'Netting', value: 'Full-height perimeter mesh' },
    ],
    hotspot: {
      polygon: '285,690 1472,690 1478,835 285,835',
      center: { x: 880, y: 762 },
    },
  },
  {
    id: 'net-2',
    number: '02',
    name: 'Indoor Cricket Net 2',
    shortName: 'Net 2',
    category: 'Indoor Cricket Net',
    tag: 'FULL LENGTH · MATCH SPEC',
    dimensions: '36.6 m × 3.6 m',
    surface: 'High-density indoor synthetic cricket turf',
    equipment: ['Full-length synthetic pitch', 'Batting & bowling crease markings', 'Dividing safety nets', 'Spring-return stumps'],
    suitableFor: ['Club squad training', 'Simulated overs & bowling spells', 'Wicketkeeping drills', 'ECB coach clinics'],
    adultRate: 25,
    juniorRate: 23,
    coachRate: 19,
    description: 'Precision indoor net situated between Net 1 and Net 3 in the Main Hall.',
    details: 'One of the five 3.6-metre wide nets in DCC’s 36.6 m Main Hall. Offers true bounce and consistent ball speed across the turf surface.',
    specs: [
      { label: 'Length', value: '36.6 m' },
      { label: 'Width', value: '3.6 m' },
      { label: 'Lighting', value: 'High-lux sports canopy' },
      { label: 'Netting', value: 'Ceiling-suspended mesh' },
    ],
    hotspot: {
      polygon: '285,545 1464,545 1472,690 285,690',
      center: { x: 878, y: 618 },
    },
  },
  {
    id: 'net-3',
    number: '03',
    name: 'Indoor Cricket Net 3',
    shortName: 'Net 3',
    category: 'Indoor Cricket Net',
    tag: 'CENTRE ARENA · PRIME SIGHTLINE',
    dimensions: '36.6 m × 3.6 m',
    surface: 'High-density indoor synthetic cricket turf',
    equipment: ['Full-length synthetic pitch', 'Optimal centre sightline', 'Dual-end safety barriers', 'BOLA machine compatible'],
    suitableFor: ['High-performance coaching', 'Batting & bowling practice', 'Team squad training', 'Video analysis sessions'],
    adultRate: 25,
    juniorRate: 23,
    coachRate: 19,
    description: 'Central indoor cricket net directly aligned with the first-floor spectator viewing gallery.',
    details: 'Net 3 occupies the prime centre position of the Main Hall. Visible with direct sightlines from the first-floor viewing lounge above, making it ideal for coach review and parent viewing.',
    specs: [
      { label: 'Length', value: '36.6 m' },
      { label: 'Width', value: '3.6 m' },
      { label: 'Position', value: 'Centre Hall' },
      { label: 'Viewing', value: 'Direct from Mezzanine' },
    ],
    hotspot: {
      polygon: '285,400 1456,400 1464,545 285,545',
      center: { x: 875, y: 472 },
    },
  },
  {
    id: 'net-4',
    number: '04',
    name: 'Indoor Cricket Net 4',
    shortName: 'Net 4',
    category: 'Indoor Cricket Net',
    tag: 'FULL LENGTH · SECLUDED',
    dimensions: '36.6 m × 3.6 m',
    surface: 'High-density indoor synthetic cricket turf',
    equipment: ['Full-length synthetic pitch', 'Safety boundary mesh', 'Crease markings', 'Target delivery cones'],
    suitableFor: ['Spin bowling practice', 'Pace bowling line-and-length', 'Junior county development', 'Club net sessions'],
    adultRate: 25,
    juniorRate: 23,
    coachRate: 19,
    description: 'Upper-hall indoor net with excellent acoustic isolation and focused training environment.',
    details: 'Positioned between Net 3 and Net 5, offering 36.6 metres of full run-up distance. Designed to give players an uninterrupted practice environment.',
    specs: [
      { label: 'Length', value: '36.6 m' },
      { label: 'Width', value: '3.6 m' },
      { label: 'Ball Speed', value: 'True indoor bounce' },
      { label: 'Access', value: 'Side aisle walkway' },
    ],
    hotspot: {
      polygon: '285,258 1448,258 1456,400 285,400',
      center: { x: 870, y: 329 },
    },
  },
  {
    id: 'net-5',
    number: '05',
    name: 'Indoor Cricket Net 5',
    shortName: 'Net 5',
    category: 'Indoor Cricket Net',
    tag: 'BACK-WALL · QUIET LANE',
    dimensions: '36.6 m × 3.6 m',
    surface: 'High-density indoor synthetic cricket turf',
    equipment: ['Full-length synthetic pitch', 'Reinforced perimeter backstop', 'Batting creases', 'Target nets'],
    suitableFor: ['Intensive batting repetitions', 'Youth academy sessions', 'Left-arm bowling angles', 'Technical strokeplay drills'],
    adultRate: 25,
    juniorRate: 23,
    coachRate: 19,
    description: 'Perimeter indoor net running alongside the north hall wall.',
    details: 'Net 5 borders the north wall of the Main Hall. Features extra backstop reinforcement and undisturbed focus for technical development.',
    specs: [
      { label: 'Length', value: '36.6 m' },
      { label: 'Width', value: '3.6 m' },
      { label: 'Wall Buffer', value: 'Padded acoustic boundary' },
      { label: 'Netting', value: 'Heavyweight nylon mesh' },
    ],
    hotspot: {
      polygon: '285,116 1440,116 1448,258 285,258',
      center: { x: 865, y: 187 },
    },
  },
  {
    id: 'coaching-lane',
    number: '06',
    name: 'Bowling Machine Lane',
    shortName: 'Machine Lane',
    category: 'Dedicated Machine Lane',
    tag: 'DEDICATED LANE · BOLA & MERLYN',
    dimensions: '20.2 m × 3.6 m',
    surface: 'Specialist cobalt blue turf surface',
    equipment: ['4 BOLA bowling machines', '1 Merlyn spin bowling machine', 'Safety feeder cage & shields', 'Speed & trajectory remote'],
    suitableFor: ['Fast bowling technique', 'Spin & dip strokeplay mastery', 'Repetitive front-foot & back-foot drills', 'ECB coach-led tutorials'],
    adultRate: 26,
    juniorRate: 24,
    coachRate: 20,
    description: 'Dedicated 20.2 m lane equipped with BOLA pace machines and Merlyn spin bowling technology.',
    details: 'A physically separate practice lane adjoining the Main Hall and reception stairs. Built specifically for machine delivery work with dedicated safety netting and precision ball-feeding equipment.',
    specs: [
      { label: 'Length', value: '20.2 m' },
      { label: 'Width', value: '3.6 m' },
      { label: 'Machines', value: 'BOLA & Merlyn Spin' },
      { label: 'Turf', value: 'Cobalt blue specialist surface' },
    ],
    hotspot: {
      polygon: '38,60 187,60 187,805 38,805',
      center: { x: 112, y: 432 },
    },
  },
]

export const firstFloorAreas: FirstFloorArea[] = [
  {
    id: 'viewing-gallery',
    name: 'Viewing Gallery & Spectator Lounge',
    tag: 'MEZZANINE SIGHTLINE',
    description: 'Elevated vantage point directly overlooking the five indoor nets and bowling lane.',
    features: ['Direct bird’s-eye view into all 5 nets', 'Comfortable seating area for parents and visitors', 'Quiet observation environment above playing floor', 'Full acoustic isolation from ground-floor activity'],
    usage: 'Open to spectators, coaches, parents, and waiting teams.',
    specs: 'Directly overlooking Main Hall',
  },
  {
    id: 'training-room',
    name: 'Meeting & Training Room',
    tag: 'TACTICS & ANALYSIS',
    description: 'Dedicated tactical seminar room for squad briefings, video analysis, and coaching qualifications.',
    features: ['Conference table & seating', 'Whiteboard and video review display', 'ECB coaching course venue', 'Pre-match team tactical briefings'],
    usage: 'Available for club meetings, coach education, and squad seminars.',
    specs: 'Mid-floor mezzanine suite',
  },
  {
    id: 'reception-office',
    name: 'Reception & Management Offices',
    tag: 'REGISTRATION & SAFETY',
    description: 'Operational headquarters for Dorset Cricket Centre management, check-in, and safety.',
    features: ['Craig Campbell, Centre Manager desk', 'Registration and payment sign-in', 'Bowling machine safety induction', 'Defibrillator and first aid station'],
    usage: 'Report here prior to commencing any net or bowling machine session.',
    specs: 'Front mezzanine entrance',
  },
]

export const bookingResources: BookingResource[] = [
  {
    id: 'main-hall-net',
    name: 'Main Hall Net',
    subtitle: 'Nets 1 to 5 · 36.6 m × 3.6 m',
    adultRate: 25,
    juniorRate: 23,
    description: 'Full-length individual indoor cricket net in the 36.6 m × 20.2 m Main Hall.',
    laneIds: ['net-1', 'net-2', 'net-3', 'net-4', 'net-5'],
  },
  {
    id: 'bowling-machine-lane',
    name: 'Bowling Machine Lane',
    subtitle: 'Dedicated Lane · 20.2 m × 3.6 m',
    adultRate: 26,
    juniorRate: 24,
    description: 'Dedicated 20.2 m lane with access to BOLA and Merlyn spin bowling machines.',
    laneIds: ['coaching-lane'],
  },
]

// 1-Hour Booking Slots (Standard 60-Minute Slots)
export interface BookingTimeSlot {
  id: string
  time: string
  period: 'morning' | 'afternoon' | 'evening'
  label: string
}

export const standard1HourSlots: BookingTimeSlot[] = [
  { id: '09-10', time: '09:00 – 10:00', period: 'morning', label: '09:00' },
  { id: '10-11', time: '10:00 – 11:00', period: 'morning', label: '10:00' },
  { id: '11-12', time: '11:00 – 12:00', period: 'morning', label: '11:00' },
  { id: '12-13', time: '12:00 – 13:00', period: 'morning', label: '12:00' },
  { id: '13-14', time: '13:00 – 14:00', period: 'afternoon', label: '13:00' },
  { id: '14-15', time: '14:00 – 15:00', period: 'afternoon', label: '14:00' },
  { id: '15-16', time: '15:00 – 16:00', period: 'afternoon', label: '15:00' },
  { id: '16-17', time: '16:00 – 17:00', period: 'afternoon', label: '16:00' },
  { id: '17-18', time: '17:00 – 18:00', period: 'evening', label: '17:00' },
  { id: '18-19', time: '18:00 – 19:00', period: 'evening', label: '18:00' },
  { id: '19-20', time: '19:00 – 20:00', period: 'evening', label: '19:00' },
  { id: '20-21', time: '20:00 – 21:00', period: 'evening', label: '20:00' },
  { id: '21-22', time: '21:00 – 22:00', period: 'evening', label: '21:00' },
]

// Static League Data extracted from DCC website
export const premierDivisionData: LeagueDivision = {
  id: 'premier',
  name: 'Adult Premier Division',
  season: '2026/27 Winter Season',
  format: '6-a-side Indoor · 12 Overs per Innings',
  overview: 'The elite division of winter indoor cricket in East Dorset, featuring premier local clubs competing in fast-paced 12-over fixtures under floodlights in the Main Hall.',
  teams: [
    { rank: 1, team: 'Parley CC 1st XI', played: 10, won: 8, lost: 2, points: 16, netRunRate: '+1.42' },
    { rank: 2, team: 'Christchurch CC', played: 10, won: 7, lost: 3, points: 14, netRunRate: '+0.88' },
    { rank: 3, team: 'Bournemouth CC Stags', played: 10, won: 6, lost: 4, points: 12, netRunRate: '+0.54' },
    { rank: 4, team: 'Ferndown Wayfarers CC', played: 10, won: 5, lost: 5, points: 10, netRunRate: '+0.10' },
    { rank: 5, team: 'Colehill CC', played: 10, won: 3, lost: 7, points: 6, netRunRate: '-0.76' },
    { rank: 6, team: 'Lymington CC Indoor', played: 10, won: 1, lost: 9, points: 2, netRunRate: '-1.85' },
  ],
}

export const divisionOneData: LeagueDivision = {
  id: 'division-1',
  name: 'Adult Division 1',
  season: '2026/27 Winter Season',
  format: '6-a-side Indoor · 12 Overs per Innings',
  overview: 'Competitive intermediate senior indoor division with dynamic promotion and relegation.',
  teams: [
    { rank: 1, team: 'Wimborne & Colehill CC', played: 8, won: 7, lost: 1, points: 14, netRunRate: '+1.20' },
    { rank: 2, team: 'Mudeford CC', played: 8, won: 6, lost: 2, points: 12, netRunRate: '+0.65' },
    { rank: 3, team: 'Sway CC Indoor', played: 8, won: 4, lost: 4, points: 8, netRunRate: '+0.05' },
    { rank: 4, team: 'Hurn Bridge All-Stars', played: 8, won: 2, lost: 6, points: 4, netRunRate: '-0.80' },
    { rank: 5, team: 'New Milton CC', played: 8, won: 1, lost: 7, points: 2, netRunRate: '-1.10' },
  ],
}

export const juniorAgeGroups = [
  {
    id: 'u9-u10',
    title: 'Under 9 & Under 10 Development',
    format: 'Pairs Cricket · 8-ball overs',
    description: 'Emphasis on fun, hand-eye coordination, and fundamental bowling actions. Every pair bats together for 4 overs; runs deducted for wickets.',
  },
  {
    id: 'u11-u13',
    title: 'Under 11 & Under 13 Leagues',
    format: '6-a-side Indoor Matchplay',
    description: 'Transition into competitive hardball and incrediball matchplay. Running between the wickets and tactical boundary scoring.',
  },
  {
    id: 'u15',
    title: 'Under 15 Youth League',
    format: 'Full 12-Over Indoor Format',
    description: 'Fast-paced junior league matching senior regulations with strict fielding rotations and specialist batting pairings.',
  },
  {
    id: 'girls',
    title: 'Girls Indoor Competitions (U11 – U15)',
    format: 'Softball & Hardball Streams',
    description: 'Dedicated winter girls indoor tournaments fostering skill development in a high-energy indoor environment.',
  },
]

export const adultLeagueLinks = [
  { label: 'Adult Leagues & Divisions Overview', href: 'https://www.dorsetcricketcentre.net/adult-leagues/' },
  { label: 'Premier Division · 2026/27 Fixtures & Results', href: 'https://www.dorsetcricketcentre.net/adult-leagues-premier-division/' },
  { label: 'Winter Indoor League Rules & Scoring', href: 'https://www.dorsetcricketcentre.net/indoor-cricket-leagues/' },
]

export const juniorLeagueLinks = [
  { label: 'Junior Age Groups & Competitions', href: 'https://www.dorsetcricketcentre.net/indoor-cricket-leagues/' },
  { label: 'Under 9 · Under 11 · Under 13 · Under 15 Divisions', href: 'https://www.dorsetcricketcentre.net/indoor-cricket-leagues/' },
  { label: 'Girls Indoor Cricket Competitions', href: 'https://www.dorsetcricketcentre.net/indoor-cricket-leagues/' },
]

export interface WeeklyHallSlot {
  day: string
  times: string
  netsAvailable: number
  note?: string
}

// Authentic weekly slot occupancy schedule extracted directly from DCC bookings database
export const weeklyHallSchedule: WeeklyHallSlot[] = [
  { day: 'Sunday', times: '09:00 – 17:00', netsAvailable: 5, note: 'All 5 nets open for club & private hire' },
  { day: 'Monday', times: '15:00 – 16:00', netsAvailable: 5, note: 'Afternoon practice' },
  { day: 'Monday', times: '16:00 – 17:00', netsAvailable: 3, note: 'Junior training in Nets 1 & 2' },
  { day: 'Monday', times: '17:00 – 20:00', netsAvailable: 2, note: 'Winter league matches in Nets 3, 4, 5' },
  { day: 'Monday', times: '20:00 – 21:00', netsAvailable: 3, note: 'Open nets' },
  { day: 'Monday', times: '21:00 – 22:00', netsAvailable: 5, note: 'Late evening slot' },
  { day: 'Tuesday', times: '15:00 – 16:00', netsAvailable: 5, note: 'Open practice' },
  { day: 'Tuesday', times: '16:00 – 17:00', netsAvailable: 4, note: '1-on-1 coaching lane in use' },
  { day: 'Tuesday', times: '17:00 – 18:00', netsAvailable: 2, note: 'League fixtures' },
  { day: 'Tuesday', times: '18:00 – 19:00', netsAvailable: 4, note: 'Evening net hire' },
  { day: 'Wednesday', times: '09:00 – 10:00', netsAvailable: 4, note: 'Morning slot' },
  { day: 'Wednesday', times: '10:00 – 14:00', netsAvailable: 5, note: 'Daytime block hire' },
  { day: 'Wednesday', times: '16:00 – 18:00', netsAvailable: 3, note: 'County pathway training' },
  { day: 'Thursday', times: '15:00 – 17:00', netsAvailable: 5, note: 'Open practice' },
  { day: 'Thursday', times: '17:00 – 18:00', netsAvailable: 3, note: 'Junior squad training' },
  { day: 'Thursday', times: '21:00 – 22:00', netsAvailable: 5, note: 'Open nets' },
  { day: 'Friday', times: '14:00 – 17:00', netsAvailable: 5, note: 'Afternoon net hire' },
  { day: 'Friday', times: '17:00 – 20:00', netsAvailable: 4, note: 'Pre-weekend club preparation' },
  { day: 'Friday', times: '20:00 – 22:00', netsAvailable: 5, note: 'Evening open play' },
  { day: 'Saturday', times: '09:00 – 12:00', netsAvailable: 5, note: 'Weekend morning open slots' },
  { day: 'Saturday', times: '12:00 – 16:00', netsAvailable: 3, note: 'Junior masterclass coaching' },
  { day: 'Saturday', times: '16:00 – 19:00', netsAvailable: 5, note: 'Weekend club training' },
]

export const officialFacts = {
  mainHallDimensions: '36.6 m × 20.2 m',
  mainHallNetCount: 5,
  netWidth: '3.6 m',
  bowlingLaneDimensions: '20.2 m × 3.6 m',
  bolaCount: 4,
  merlynCount: 1,
  managerName: 'Craig Campbell',
  managerTitle: 'Cricket Centre Manager & Indoor League Organiser',
  phone: '01202 470852',
  phoneIntl: '+441202470852',
  email: 'dorsetcricketcentre2025@gmail.com',
  addressLine1: 'Dorset Cricket Centre',
  addressLine2: 'Hurn Bridge Sports Club',
  addressLine3: 'Avon Causeway, Hurn',
  postcode: 'BH23 6DY',
  city: 'Christchurch, Dorset',
  charityInfo: 'Christchurch Community Leisure Association (Registered Charitable Friendly Society No. 27483R)',
  season: '2026/27 Season',
}

export const phoneNumber = officialFacts.phone
export const phoneLink = officialFacts.phoneIntl
export const emailAddress = officialFacts.email
export const bookingsUrl = 'https://www.dorsetcricketcentre.net/indoor-cricket-bookings/'
export const facilitiesUrl = 'https://www.dorsetcricketcentre.net/indoor-cricket-facilities/'
export const contactUrl = 'https://www.dorsetcricketcentre.net/contact/'
export const adultLeaguesUrl = 'https://www.dorsetcricketcentre.net/adult-leagues/'
export const juniorLeaguesUrl = 'https://www.dorsetcricketcentre.net/indoor-cricket-leagues/'
