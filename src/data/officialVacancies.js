const TYPE_LABELS = {
  "01": "公立",
  "02": "公立附幼",
  "04": "公立附幼",
  "07": "非營利",
};

export const officialVacancyDate = "2026-04-29";

export const officialVacancies = [
  { name: "新北市立重慶國民中學附設幼兒園", subname: "", schno: "014503", eduMod: "04", phone: "(02)29543001#602", vacancy2yo: null, vacancy35: 61 },
  { name: "新北市立江翠國民中學附設幼兒園", subname: "", schno: "014504", eduMod: "04", phone: "(02)22501146", vacancy2yo: null, vacancy35: 85 },
  { name: "新北市立新埔國民中學附設幼兒園", subname: "", schno: "014506", eduMod: "04", phone: "(02)22572275#288", vacancy2yo: null, vacancy35: 86 },
  { name: "新北市立溪崑國民中學附設幼兒園", subname: "", schno: "014552", eduMod: "04", phone: "(02)26869727#160", vacancy2yo: 14, vacancy35: 21 },
  { name: "新北市立忠孝國民中學附設幼兒園", subname: "", schno: "014575", eduMod: "04", phone: "(02)29631350#303", vacancy2yo: null, vacancy35: 42 },
  { name: "新北市板橋區板橋國民小學附設幼兒園", subname: "", schno: "014601", eduMod: "02", phone: "(02)29650480", vacancy2yo: null, vacancy35: 66 },
  { name: "新北市板橋區國光國民小學附設幼兒園", subname: "", schno: "014602", eduMod: "02", phone: "(02)29677719#500", vacancy2yo: null, vacancy35: 77 },
  { name: "新北市板橋區新埔國民小學附設幼兒園", subname: "", schno: "014603", eduMod: "02", phone: "(02)22571830#683", vacancy2yo: null, vacancy35: 44 },
  { name: "新北市板橋區埔墘國民小學附設幼兒園", subname: "", schno: "014604", eduMod: "02", phone: "(02)29616690#282", vacancy2yo: 14, vacancy35: 87 },
  { name: "新北市板橋區莒光國民小學附設幼兒園", subname: "", schno: "014605", eduMod: "02", phone: "(02)82597020", vacancy2yo: null, vacancy35: 54 },
  { name: "新北市板橋區後埔國民小學附設幼兒園", subname: "", schno: "014606", eduMod: "02", phone: "(02)29614142#18", vacancy2yo: null, vacancy35: 32 },
  { name: "新北市板橋區海山國民小學附設幼兒園", subname: "", schno: "014607", eduMod: "02", phone: "(02)29545725#45", vacancy2yo: null, vacancy35: 33 },
  { name: "新北市板橋區江翠國民小學附設幼兒園", subname: "", schno: "014608", eduMod: "02", phone: "(02)22506374", vacancy2yo: 28, vacancy35: 17 },
  { name: "新北市板橋區文聖國民小學附設幼兒園", subname: "", schno: "014610", eduMod: "02", phone: "(02)22530782#628", vacancy2yo: 28, vacancy35: 16 },
  { name: "新北市板橋區沙崙國民小學附設幼兒園", subname: "", schno: "014611", eduMod: "02", phone: "(02)26812764#851", vacancy2yo: 16, vacancy35: 60 },
  { name: "新北市板橋區文德國民小學附設幼兒園", subname: "", schno: "014612", eduMod: "02", phone: "(02)22577193#36", vacancy2yo: null, vacancy35: 47 },
  { name: "新北市板橋區中山國民小學附設幼兒園", subname: "", schno: "014766", eduMod: "02", phone: "(02)22755313#238", vacancy2yo: null, vacancy35: 54 },
  { name: "新北市板橋區實踐國民小學附設幼兒園", subname: "", schno: "014768", eduMod: "02", phone: "(02)29531233#302", vacancy2yo: 14, vacancy35: 71 },
  { name: "新北市板橋區大觀國民小學附設幼兒園", subname: "", schno: "014769", eduMod: "02", phone: "(02)29603373#880", vacancy2yo: 14, vacancy35: 54 },
  { name: "新北市板橋區溪洲國民小學附設幼兒園", subname: "", schno: "014770", eduMod: "02", phone: "(02)26867705#80", vacancy2yo: null, vacancy35: 37 },
  { name: "新北市板橋區信義國民小學附設幼兒園", subname: "", schno: "014771", eduMod: "02", phone: "(02)89667817#172", vacancy2yo: 28, vacancy35: 24 },
  { name: "新北市板橋區重慶國民小學附設幼兒園", subname: "", schno: "014772", eduMod: "02", phone: "(02)29565592#501", vacancy2yo: 14, vacancy35: 10 },
  { name: "新北市立板橋幼兒園", subname: "", schno: "014X9F", eduMod: "01", phone: "(02)29682497", vacancy2yo: null, vacancy35: 33 },
  { name: "新北市立板橋幼兒園", subname: "新民分班", schno: "014X9F", eduMod: "01", phone: "(02)22558468", vacancy2yo: null, vacancy35: 27 },
  { name: "新北市立板橋幼兒園", subname: "和平分班", schno: "014X9F", eduMod: "01", phone: "(02)29646945", vacancy2yo: null, vacancy35: 32 },
  { name: "新北市柏翠非營利幼兒園(委託財團法人心路社會福利基金會辦理)", subname: "", schno: "011K20", eduMod: "07", phone: "", vacancy2yo: 15, vacancy35: 27 },
  { name: "新北市翠中非營利幼兒園(委託財團法人三之三生命教育基金會辦理)", subname: "", schno: "011K38", eduMod: "07", phone: "", vacancy2yo: null, vacancy35: 23 },
  { name: "新北市大觀非營利幼兒園(委託社團法人新北市中華國際嬰幼兒發展學會辦理)", subname: "", schno: "011K1I", eduMod: "07", phone: "", vacancy2yo: 15, vacancy35: 16 },
  { name: "新北市新月非營利幼兒園(委託財團法人彭婉如文教基金會辦理)", subname: "", schno: "011K1N", eduMod: "07", phone: "", vacancy2yo: 60, vacancy35: 32 },
  { name: "新北市永翠非營利幼兒園（委託社團法人新北市多元教育協會辦理）", subname: "", schno: "011K44", eduMod: "07", phone: "", vacancy2yo: 15, vacancy35: 76 },
].map((item) => ({
  ...item,
  typeLabel: TYPE_LABELS[item.eduMod] ?? "待確認",
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${item.name} ${item.subname}`.trim(),
  )}`,
}));
