import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explora',
  templateUrl: './explora.page.html',
  styleUrls: ['./explora.page.scss'],
})
export class ExploraPage implements OnInit {

  dato1="401";
  dato2="402";

  dato3="501";
  dato4="502";

  constructor(private qrScanner: QRScanner,
    private router: Router) {
      
    }

  ngOnInit() {
    this.qrscanner();
  }
  qrscanner() {
    
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted

          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            if(text == '401'){
              this.router.navigate(['/qr', this.dato1]);
            }else if(text == '402'){
              this.router.navigate(['/qr', this.dato2]);
            }
            //alert(text);
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

          this.qrScanner.resumePreview();

          // show camera preview
          this.qrScanner.show();

          // wait for user to scan something, then the observable callback will be called

        } else if (status.denied) {
          alert('denied');
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          alert('else');
        }
      })
      .catch((e: any) => {
        alert('Error is' + e);
      });

  }

}
