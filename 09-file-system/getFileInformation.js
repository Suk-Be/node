// Syntax: fs.stat(path, callback)
/*
Parameters:
- path      − This is the string having file name including path.
- callback  − This is the callback function which gets two arguments (err, stats)
              where stats is an object of fs.Stats type which is printed below in the example.

some useful Methods & Description:
stats.isFile()             - Returns true if file type of a simple file.
stats.isDirectory()        - Returns true if file type of a directory.
stats.isBlockDevice()      - Returns true if file type of a block device
                             (
                                FYI:
                                wikipedia:
                                Blockorientierte Geräte
                                (auch Blockspeichergerät, Blockgerät oder engl. block device)
                                übertragen Daten in Datenblöcken
                                und werden daher oft für parallele Datenübertragungen genutzt.
                                Alle diese Geräte nutzen den betriebssystemeigenen Puffer.

                                z.B.
                                Festplatten, Disketten Laufwerk, CD-ROM, Partitionen
                             ).
stats.isCharacterDevice()  - Returns true if file type of a character device.
                             (
                                FYI:
                                wikipedia
                                Zeichenorientierte Geräte
                                übertragen nur ein Zeichen (typischerweise ein Byte) zur selben Zeit,
                                sind also der seriellen Datenübertragung zuzusprechen.
                                Meist,
                                aber nicht immer,
                                werden Daten ungepuffert – also sofort – übertragen.

                                z.B.
                                Serielle Schnittstelle (Windows - COM, Linux - ttyS0)
                                Parallele Schnittstelle (Windows - LPT, Linux - lp0)
                             )
stats.isSymbolicLink()      - Returns true if file type of a symbolic link
stats.isFIFO()              - Returns true if file type of a FIFO (aka named pipes)
                            (
                              wikipedia
                              First In – First Out
                              (englisch für der Reihe nach),
                              häufig abgekürzt mit FIFO,
                              gleichbedeutend mit
                              „First come, first served.“
                              bzw.
                              FCFS (engl. für Wer zuerst kommt, mahlt zuerst.),
                              bezeichnet jegliche Verfahren der Speicherung,
                              bei denen diejenigen Elemente,
                              die zuerst gespeichert wurden,
                              auch zuerst wieder aus dem Speicher entnommen werden.
                              Eine solche Datenstruktur wird auch als (Warte-)Schlange bezeichnet.
                            )
stats.isSocket()            - Returns true if file type of a socket
                            (
                              wikipedia
                              Bei socketorientierten Geräten handelt es sich nicht um Gerätedateien,
                              sondern eine Form von Interprozesskommunikation.
                              Wie FIFOs sind sie damit keine Gerätedateien,
                              können aber auch zur Kommunikation mit dem Kernel eingesetzt werden
                              und nehmen dabei eine ähnliche Aufgabe wahr wie zeichenorientierte Geräte.

                              z.B.
                              Dateiname: /dev/log	- Socket für den syslog-Daemon
                              Dateiname: /dev/gpmdata	Socket für den GPM-Maus-Multiplexer
                              Dateiname: /dev/printer	Socket für lpd
                            )
 */
const fs = require('fs')

console.log('Going to get file info!')
fs.stat('openFile.txt', (err, stats) => {
  if(err){
    return console.log(err)
  }
  console.log(stats)
  console.log('Got file info successfully')

  // check file type
  console.log('isFile ? ' + stats.isFile())
  console.log('isDirectory ? ' + stats.isDirectory())
})