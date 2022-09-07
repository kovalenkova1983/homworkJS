let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-рол");
styles[Math.floor((styles.length - 1) / 2)] = "Класика";
document.write( styles.shift() );
styles.unshift("Реп", "Реггі");