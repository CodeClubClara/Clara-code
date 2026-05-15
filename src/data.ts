/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SwimRecord {
  id: string;
  event: string;
  time: string;
  athlete: string;
  nationality: string;
  date: string;
  location: string;
  isSCY?: boolean;
}

export interface RecordCategory {
  men: SwimRecord[];
  women: SwimRecord[];
}

export const SWIMMING_RECORDS: RecordCategory = {
  men: [
    { id: "m1", event: "50y Freestyle", time: "17.63", athlete: "Caeleb Dressel", nationality: "USA", date: "2018-03-22", location: "Minneapolis, USA", isSCY: true },
    { id: "m2", event: "100y Butterfly", time: "42.80", athlete: "Caeleb Dressel", nationality: "USA", date: "2018-03-23", location: "Minneapolis, USA", isSCY: true },
    { id: "m3", event: "100y Freestyle", time: "39.90", athlete: "Caeleb Dressel", nationality: "USA", date: "2018-03-24", location: "Minneapolis, USA", isSCY: true },
    { id: "m4", event: "100y Breaststroke", time: "50.03", athlete: "Caeleb Dressel", nationality: "USA", date: "2018-03-23", location: "Minneapolis, USA", isSCY: true },
    { id: "m5", event: "50y Butterfly (Top 1)", time: "18.11", athlete: "Nyls Korstanje", nationality: "Netherlands", date: "2023-03-24", location: "Minneapolis, USA", isSCY: true },
    { id: "m6", event: "50y Butterfly (Top 2)", time: "18.15", athlete: "Jordan Crooks", nationality: "Cayman Islands", date: "2023-03-24", location: "Minneapolis, USA", isSCY: true },
    { id: "m7", event: "50y Butterfly (Top 3)", time: "18.30", athlete: "Youssef Ramadan", nationality: "Egypt", date: "2023-03-24", location: "Minneapolis, USA", isSCY: true },
    { id: "m8", event: "50y Butterfly (Top 4)", time: "18.52", athlete: "Josh Liendo", nationality: "Canada", date: "2024-03-28", location: "Indianapolis, USA", isSCY: true },
    { id: "m9", event: "50y Butterfly (Top 5)", time: "18.60", athlete: "Aiden Hayes", nationality: "USA", date: "2023-03-24", location: "Minneapolis, USA", isSCY: true },
    { id: "m10", event: "50y Butterfly (Top 6)", time: "18.71", athlete: "Luke Miller", nationality: "USA", date: "2024-03-28", location: "Indianapolis, USA", isSCY: true },
    { id: "m11", event: "50y Butterfly (Top 7)", time: "18.82", athlete: "Tom Shields", nationality: "USA", date: "2013-03-28", location: "Indianapolis, USA", isSCY: true },
    { id: "m12", event: "50y Butterfly (Top 8)", time: "18.90", athlete: "Joseph Schooling", nationality: "Singapore", date: "2017-03-24", location: "Indianapolis, USA", isSCY: true },
    { id: "m13", event: "50y Butterfly (Top 9)", time: "18.95", athlete: "Bence Szabados", nationality: "Hungary", date: "2024-03-28", location: "Indianapolis, USA", isSCY: true },
    { id: "m14", event: "50y Butterfly (Top 10)", time: "19.01", athlete: "Ilya Kharun", nationality: "Canada", date: "2024-03-28", location: "Indianapolis, USA", isSCY: true },
    { id: "m15", event: "200y Freestyle", time: "1:31.72", athlete: "Michael Phelps", nationality: "USA", date: "2010-03-03", location: "Austin, USA", isSCY: true },
    { id: "m16", event: "200y Butterfly", time: "1:39.65", athlete: "Michael Phelps", nationality: "USA", date: "2010-03-04", location: "Austin, USA", isSCY: true },
    { id: "m17", event: "200y Individual Medley", time: "1:40.08", athlete: "Michael Phelps", nationality: "USA", date: "2010-03-04", location: "Austin, USA", isSCY: true },
    { id: "m18", event: "400y Individual Medley", time: "3:34.50", athlete: "Michael Phelps", nationality: "USA", date: "2011-03-04", location: "Austin, USA", isSCY: true },
    { id: "m19", event: "200y Individual Medley", time: "1:36.34", athlete: "Leon Marchand", nationality: "France", date: "2024-03-28", location: "Indianapolis, USA", isSCY: true },
    { id: "m20", event: "400y Individual Medley", time: "3:28.82", athlete: "Leon Marchand", nationality: "France", date: "2024-03-29", location: "Indianapolis, USA", isSCY: true },
    { id: "m21", event: "500y Freestyle", time: "4:02.31", athlete: "Leon Marchand", nationality: "France", date: "2024-03-28", location: "Indianapolis, USA", isSCY: true },
  ],
  women: [
    { id: "w1", event: "100y Butterfly", time: "45.89", athlete: "Gretchen Walsh", nationality: "USA", date: "2024-03-22", location: "Athens, USA", isSCY: true },
    { id: "w2", event: "50y Freestyle", time: "20.37", athlete: "Gretchen Walsh", nationality: "USA", date: "2024-03-21", location: "Athens, USA", isSCY: true },
    { id: "w3", event: "100y Freestyle", time: "44.83", athlete: "Gretchen Walsh", nationality: "USA", date: "2024-03-23", location: "Athens, USA", isSCY: true },
    { id: "w4", event: "100y Backstroke", time: "48.10", athlete: "Gretchen Walsh", nationality: "USA", date: "2024-03-22", location: "Athens, USA", isSCY: true },
    { id: "w5", event: "50y Butterfly (Top 1)", time: "21.90", athlete: "Gretchen Walsh", nationality: "USA", date: "2024-03-21", location: "Athens, USA", isSCY: true },
    { id: "w6", event: "50y Butterfly (Top 2)", time: "22.01", athlete: "Kate Douglass", nationality: "USA", date: "2023-03-16", location: "Knoxville, USA", isSCY: true },
    { id: "w7", event: "50y Butterfly (Top 3)", time: "22.20", athlete: "Torri Huske", nationality: "USA", date: "2023-03-16", location: "Knoxville, USA", isSCY: true },
    { id: "w8", event: "50y Butterfly (Top 4)", time: "22.34", athlete: "Maggie Mac Neil", nationality: "Canada", date: "2022-03-17", location: "Atlanta, USA", isSCY: true },
    { id: "w9", event: "50y Butterfly (Top 5)", time: "22.45", athlete: "Alex Walsh", nationality: "USA", date: "2024-03-21", location: "Athens, USA", isSCY: true },
    { id: "w10", event: "50y Butterfly (Top 6)", time: "22.58", athlete: "Claire Curzan", nationality: "USA", date: "2022-03-17", location: "Atlanta, USA", isSCY: true },
    { id: "w11", event: "50y Butterfly (Top 7)", time: "22.65", athlete: "Erika Brown", nationality: "USA", date: "2020-02-21", location: "Auburn, USA", isSCY: true },
    { id: "w12", event: "50y Butterfly (Top 8)", time: "22.70", athlete: "Louise Hansson", nationality: "Sweden", date: "2019-03-21", location: "Austin, USA", isSCY: true },
    { id: "w13", event: "50y Butterfly (Top 9)", time: "22.75", athlete: "Farida Osman", nationality: "Egypt", date: "2017-03-16", location: "Indianapolis, USA", isSCY: true },
    { id: "w14", event: "50y Butterfly (Top 10)", time: "22.82", athlete: "Kelsi Dahlia", nationality: "USA", date: "2018-03-15", location: "Columbus, USA", isSCY: true },
  ],
};
