/*
Node.js os module provides a few basic operating-system related utility functions.
This module can be imported using the following syntax.
var os = require("os")

Methods:
os.tmpdir()         - Returns the operating system's default directory for temp files.
os.endianness()     - Returns the endianness of the CPU. Possible values are "BE" or "LE".

                      FYI:
                      Die Byte-Reihenfolge (englisch byte order oder endianness) bezeichnet in der Computertechnik
                      die Speicherorganisation für einfache Zahlenwerte,
                      in erster Linie die Ablage ganzzahliger Werte (Integer) im Arbeitsspeicher.

                      Die ersten Rechnerarchitekturen haben die Darstellung mehrstelliger Zahlen aus dem Alltag entsprechend
                      der Konvention des Stellenwertsystems übernommen,
                      zunächst für dezimal, dann auch für binär dargestellte Zahlen.
                      In dieser Konvention beginnt die Notation einer Zahl mit der Ziffer an der höchstwertigen Stelle.
                      Addition, Subtraktion und Multiplikation beginnen aber mit der niedrigstwertigen Ziffer, der Einerstelle.

                      Solange man innerhalb ähnlicher Rechnerarchitekturen blieb,
                      musste man sich nicht um die Endianness kümmern, sie entsprach ja der gewohnten.

                      Da die genannten drei mathematischen Grundfunktionen jedoch einen Maschinenzyklus früher starten können,
                      wenn man die Bitreihenfolge umkehrt, haben in der Folge einige Hersteller ein entsprechendes Architekturprinzip erstellt.

                      Das heißt:
                      die Einerstelle wird an die Anfangsadresse gelegt,
                      und die 3 genannten Algorithmen schreiten nach rechts in die höheren Stellen und Adressen fort.
                      Diese Abweichung vom Gewohnten machte die Begriffsbildung Endianness erforderlich:

                      Beim big-endian (wörtlich etwa: „großendigen“, siehe auch Abschnitt Etymologie) Format wird das höchstwertige Byte zuerst gespeichert,
                      d. h. an der kleinsten Speicheradresse.
                      Allgemein bedeutet der Begriff, dass bei zusammengesetzten Daten die größtwertige (höchstrangige) Komponente zuerst genannt wird,
                      wie etwa bei der deutschen Schreibweise der Uhrzeit: Stunde:Minute:Sekunde.

                      Beim little-endian (wörtlich etwa: „kleinendigen“) Format wird dagegen das kleinstwertige Byte an der Anfangsadresse gespeichert
                      bzw. die kleinstwertige Komponente zuerst genannt,
                      wie bei der herkömmlichen deutschen Datumsschreibweise: Tag.Monat.Jahr.

                      Die Begriffe big-endian und little-endian bezeichnen also dasjenige Ende der Darstellung,
                      das an erster Stelle notiert bzw. an der kleinsten Adresse gespeichert wird.
                      Da letztere Adresse auch in aller Regel das ganze (mehrstellige) Feld adressiert,
                      wären die Bezeichnungen „Big-Startian“ und „Little-Startian“ noch treffender,
                      weil das Feld an der betrachteten Stelle nicht endet, sondern startet.

os.hostname()       - Returns the hostname of the operating system.
                    FYI:
                    Der Hostname (auch Sitename)[1] ist die eindeutige Bezeichnung eines Rechners in einem Netzwerk.
                    BNLT1030666

os.type()           - Returns the operating system name.

os.platform()       - Returns the operating system platform.

os.arch()           - Returns the operating system CPU architecture. Possible values are "x64", "arm" and "ia32".
os.release()        - Returns the operating system release.
os.uptime()         - Returns the system uptime in seconds.
os.loadavg()        - Returns an array containing the 1, 5, and 15 minute load averages.
os.totalmem()       - Returns the total amount of system memory in bytes.
os.freemem()        - Returns the amount of free system memory in bytes.
os.cpus()           - Returns an array of objects containing information about each CPU/core installed:
                      model,
                      speed (in MHz),
                      and times
                    (
                      an object containing the number of milliseconds
                      the CPU/core spent in:
                        user,
                        nice,
                        sys,
                        idle,
                        and irq
                     ).

os.networkInterfaces() - Get a list of network interfaces.

Properties
os.EOL              - A constant defining the appropriate End-of-line marker for the operating system.

 */
const os = require('os')

console.log('OS default directory for temp files', os.tmpdir())
console.log('the endianess of CPU is: ', os.endianness(), 'meaning little endian: little numbers are processed first in the byte storage organisation')
console.log('Hostname of os: ', os.hostname())
console.log('os name: ', os.type())
console.log('os platform: ', os.platform())
console.log('os cpu architecture: ', os.arch())
console.log('os uptime in seconds: ', os.uptime())
console.log('Returns an array containing 1, 5 and 15 minute load averages', os.loadavg())
console.log('Returns total amount of system memory in bytes', os.totalmem())
console.log('Returns total amount of free memory in bytes', os.freemem())
console.log('Returns an array of objects containing information about each cpu/core installed', os.cpus())
console.log('Get a list of network interfaces', os.networkInterfaces())
