// Maps placeholder names to actual image paths in /public/images/
// Usage: imageMap["hero-exterior-1"] => "/images/fotoOfHouse/a13887-..."

const imageMap: Record<string, string> = {
  // === HERO / EXTERIOR ===
  "hero-exterior-1": "/images/fotoOfHouse/upscalemedia-transformed (1).webp",
  "interior-living-1": "/images/livingroom/a13887-chata-za-studenym-potokom-20251219-081904-4378.webp",
  "interior-kitchen-1": "/images/kitchen/a13887-chata-za-studenym-potokom-20251219-082832-9725.webp",
  "interior-bedroom-1": "/images/rooms/a13887-chata-za-studenym-potokom-20251219-083037-8268.webp",

  // === LIVING ROOM (8) ===
  "living-1": "/images/livingroom/a13887-chata-za-studenym-potokom-20251219-075025-1618.webp",
  "living-2": "/images/livingroom/a13887-chata-za-studenym-potokom-20251219-081903-6312.webp",
  "living-3": "/images/livingroom/a13887-chata-za-studenym-potokom-20251219-081904-4378.webp",
  "living-4": "/images/livingroom/a13887-chata-za-studenym-potokom-20251219-081904-9631.webp",
  "living-5": "/images/livingroom/a13887-chata-za-studenym-potokom-20251219-082103-5205.webp",
  "living-6": "/images/livingroom/a13887-chata-za-studenym-potokom-20251219-082103-9007.webp",
  "living-7": "/images/livingroom/a13887-chata-za-studenym-potokom-20251219-082832-4089.webp",
  "living-8": "/images/livingroom/a13887-chata-za-studenym-potokom-20251219-082832-5416.webp",

  // === KITCHEN (3) ===
  "kitchen-1": "/images/kitchen/a13887-chata-za-studenym-potokom-20251219-082103-4436.webp",
  "kitchen-2": "/images/kitchen/a13887-chata-za-studenym-potokom-20251219-082832-9725.webp",
  "kitchen-3": "/images/kitchen/a13887-chata-za-studenym-potokom-20260110-142055-3136.webp",

  // === BEDROOMS (12) ===
  "bedroom-1": "/images/rooms/a13887-chata-za-studenym-potokom-20251219-083037-3049.webp",
  "bedroom-2": "/images/rooms/a13887-chata-za-studenym-potokom-20251219-083037-8268.webp",
  "bedroom-3": "/images/rooms/a13887-chata-za-studenym-potokom-20251219-083037-9906.webp",
  "bedroom-4": "/images/rooms/a13887-chata-za-studenym-potokom-20251219-083154-6284.webp",
  "bedroom-5": "/images/rooms/a13887-chata-za-studenym-potokom-20251219-083155-4412.webp",
  "bedroom-6": "/images/rooms/a13887-chata-za-studenym-potokom-20251219-083159-3939.webp",
  "bedroom-7": "/images/rooms/a13887-chata-za-studenym-potokom-20251226-150832-6013.webp",
  "bedroom-8": "/images/rooms/a13887-chata-za-studenym-potokom-20251226-150834-6148.webp",
  "bedroom-9": "/images/rooms/a13887-chata-za-studenym-potokom-20251219-082618-8603.webp",
  "bedroom-10": "/images/rooms/a13887-chata-za-studenym-potokom-20251219-082954-1124.webp",
  "bedroom-11": "/images/rooms/a13887-chata-za-studenym-potokom-20251219-082954-2207.webp",
  "bedroom-12": "/images/rooms/a13887-chata-za-studenym-potokom-20251219-082954-9739.webp",

  // === BATHROOMS (8) ===
  "bathroom-1": "/images/bathroom/a13887-chata-za-studenym-potokom-20251219-081559-1586.webp",
  "bathroom-2": "/images/bathroom/a13887-chata-za-studenym-potokom-20251219-081559-9325.webp",
  "bathroom-3": "/images/bathroom/a13887-chata-za-studenym-potokom-20251219-082304-8761.webp",
  "bathroom-4": "/images/bathroom/a13887-chata-za-studenym-potokom-20251219-082305-3773.webp",
  "bathroom-5": "/images/bathroom/a13887-chata-za-studenym-potokom-20251219-082305-7838.webp",
  "bathroom-6": "/images/bathroom/a13887-chata-za-studenym-potokom-20251219-082416-2214.webp",
  "bathroom-7": "/images/bathroom/a13887-chata-za-studenym-potokom-20251219-082416-8436.webp",
  "bathroom-8": "/images/bathroom/a13887-chata-za-studenym-potokom-20251219-082416-9390.webp",

  // === WELLNESS (3) ===
  "wellness-sauna": "/images/wellness/a13887-chata-za-studenym-potokom-20251219-075028-5139.webp",
  "wellness-hottub": "/images/wellness/a13887-chata-za-studenym-potokom-20251219-075030-8459.webp",
  "wellness-shower": "/images/wellness/a13887-chata-za-studenym-potokom-20251219-075031-6981.webp",

  // === TERRACE & YARD (15) ===
  "terrace-1": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-074906-3637.webp",
  "terrace-2": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-075029-4364.webp",
  "terrace-3": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-081035-4217.webp",
  "terrace-4": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-081459-4983.webp",
  "terrace-5": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-081559-8921.webp",
  "terrace-6": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-081715-7496.webp",
  "terrace-7": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-081716-4259.webp",
  "terrace-8": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-081717-9723.webp",
  "terrace-9": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-081756-1853.webp",
  "terrace-10": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-081756-9668.webp",
  "terrace-11": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-110755-7348.webp",
  "terrace-12": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251226-150834-7434.webp",
  "terrace-13": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20260112-190106-2613.webp",
  "terrace-14": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-081716-2673.webp",
  "terrace-15": "/images/viewOfTheTerraceandYard/a13887-chata-za-studenym-potokom-20251219-075031-6981.webp",

  // === KIDS AREA (2) ===
  "kids-1": "/images/spaceforchildre/a13887-chata-za-studenym-potokom-20251219-082618-1667.webp",
  "kids-2": "/images/spaceforchildre/a13887-chata-za-studenym-potokom-20251219-082619-5322.webp",

  // === ACTIVITIES / OKOLIE (16) ===
  "summer-stream": "/images/okolie&aktivity/studenyPotok.webp",
  "winter-ski": "/images/okolie&aktivity/SkiparkRohace-Janovky.jpg",
  "summer-folklore": "/images/okolie&aktivity/PodrohacskeFolklorneSlavnosti.jpg",
  "summer-hiking": "/images/okolie&aktivity/turistikaVRohacoch.jpg",
  "summer-cycling": "/images/okolie&aktivity/cyklistika.jpg",
  "winter-crosscountry": "/images/okolie&aktivity/bezkovanie.jpg",
  "summer-sports": "/images/okolie&aktivity/sportARekreacia.jpg",
  "summer-nature": "/images/okolie&aktivity/Tarzania-Jasna.jpg",
  "summer-museum": "/images/okolie&aktivity/muzeum-oravskej-dediny-15.avif",
  "winter-snowboard": "/images/okolie&aktivity/snowboarding_snowpark.jpg",
  "winter-hiking": "/images/okolie&aktivity/zimnaTuristika.jpg",
  "thermal-baths": "/images/okolie&aktivity/termalneKupele.jpg",
  "summer-rafting": "/images/okolie&aktivity/SplavOravaRafting.jpg",
  "summer-lake": "/images/okolie&aktivity/oravskaPriehrada.jpg",
  "summer-castle": "/images/okolie&aktivity/oravsky-hrad58781489.jpg",
  "zakopane": "/images/okolie&aktivity/zakopaneSmokovec.webp",
};

export default imageMap;
