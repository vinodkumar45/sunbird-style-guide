import {
  Component,
  OnInit
} from '@angular/core';
import {
  HighlightResult
} from 'ngx-highlightjs';
import {
  Ng2IzitoastService
} from 'ng2-izitoast';

@Component({
  selector: 'app-toasters',
  templateUrl: './toasters.component.html'
})
export class ToastersComponent implements OnInit {

  constructor(public iziToast: Ng2IzitoastService) { }

  pageTitle = 'Toasters';
  sections = [{
    expandCode: false,
    title: 'Standard Information Toaster',
    demoCode: `
      <div class="sb-toaster sb-toast-info sb-toast-normal">
      <div class="sb-toast-body">
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Simple Meassage</div>
          <div class="sb-toast-message">message comes here</div>
        </div>
        <span class="sb-toast-close-icon"></span>
        </div>
    </div>
      `,
    copyCode: `
      <div class="sb-toaster sb-toast-info sb-toast-normal">
      <div class="sb-toast-body">
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Simple Meassage</div>
          <div class="sb-toast-message">message comes here</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `
  },
  {
    expandCode: false,
    title: 'Standard Success Toaster',
    demoCode: `
      <div class="sb-toaster sb-toast-success sb-toast-normal">
      <div class="sb-toast-body">
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Thank you!</div>
          <div class="sb-toast-message">We have received your download request.
           The file will be sent to your registered email ID shortly.</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `,
    copyCode: `
      <div class="sb-toaster sb-toast-success sb-toast-normal">
      <div class="sb-toast-body">
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Thank you!</div>
          <div class="sb-toast-message">We have received your download request.
           The file will be sent to your registered email ID shortly.</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `
  },
  {
    expandCode: false,
    title: 'Standard Warning Toaster',
    demoCode: `
      <div class="sb-toaster sb-toast-warning sb-toast-normal">
      <div class="sb-toast-body">
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Download failed!</div>
          <div class="sb-toast-message">Your profile does not have a valid email ID. Please update your email ID.</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `,
    copyCode: `
      <div class="sb-toaster sb-toast-warning sb-toast-normal">
      <div class="sb-toast-body">
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Download failed!</div>
          <div class="sb-toast-message">Your profile does not have a valid email ID. Please update your email ID.</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `
  },
  {
    expandCode: false,
    title: 'Standard Error Toaster',
    demoCode: `
      <div class="sb-toaster sb-toast-danger sb-toast-normal">
      <div class="sb-toast-body">
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Delete this Content Type</div>
          <div class="sb-toast-message">When you delete a folder you also delete all of its contents.</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `,
    copyCode: `
      <div class="sb-toaster sb-toast-danger sb-toast-normal">
      <div class="sb-toast-body">
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Delete this Content Type</div>
          <div class="sb-toast-message">When you delete a folder you also delete all of its contents.</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `
  },
  {
    expandCode: false,
    title: 'Critical Information Toaster',
    demoCode: `
      <div class="sb-toaster sb-toast-info">
      <div class="sb-toast-body">
        <i class="book icon sb-toast-icon"></i>
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Simple Meassage</div>
          <div class="sb-toast-message">message comes here</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `,
    copyCode: `
      <div class="sb-toaster sb-toast-info">
      <div class="sb-toast-body">
        <i class="book icon sb-toast-icon"></i>
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Simple Meassage</div>
          <div class="sb-toast-message">message comes here</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `
  },
  {
    expandCode: false,
    title: 'Critical Success Toaster',
    demoCode: `
      <div class="sb-toaster sb-toast-success">
      <div class="sb-toast-body">
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Thank you!</div>
          <div class="sb-toast-message">We have received your download request.
           The file will be sent to your registered email ID shortly.</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `,
    copyCode: `
      <div class="sb-toaster sb-toast-success">
      <div class="sb-toast-body">
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Thank you!</div>
          <div class="sb-toast-message">We have received your download request.
           The file will be sent to your registered email ID shortly.</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `
  },
  {
    expandCode: false,
    title: 'Critical Warning Toaster',
    demoCode: `
      <div class="sb-toaster sb-toast-warning">
      <div class="sb-toast-body">
        <i class="warning icon sb-toast-icon"></i>
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Download failed!</div>
          <div class="sb-toast-message">Your profile does not have a valid email ID. Please update your email ID.</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `,
    copyCode: `
      <div class="sb-toaster sb-toast-warning">
      <div class="sb-toast-body">
        <i class="warning icon sb-toast-icon"></i>
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Download failed!</div>
          <div class="sb-toast-message">Your profile does not have a valid email ID. Please update your email ID.</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `
  },
  {
    expandCode: false,
    title: 'Critical Error Toaster',
    demoCode: `
      <div class="sb-toaster sb-toast-danger">
      <div class="sb-toast-body">
        <i class="plus icon sb-toast-icon"></i>
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Delete this Content Type</div>
          <div class="sb-toast-message">When you delete a folder you also delete all of its contents.</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `,
    copyCode: `
      <div class="sb-toaster sb-toast-danger">
      <div class="sb-toast-body">
        <i class="plus icon sb-toast-icon"></i>
        <div class="sb-toast-texts">
          <div class="sb-toast-title">Delete this Content Type</div>
          <div class="sb-toast-message">When you delete a folder you also delete all of its contents.</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `
  }
  ];

  InfoToaster() {
    this.iziToast.show({
      title: 'Sample message',
      message: 'Message come here',
      class: 'sb-toaster sb-toast-info',
      icon: 'book icon',
      position: 'center',
      timeout: 100000000,
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX'
    });
  }

  SuccessToaster() {
    this.iziToast.show({
      title: 'Thank you',
      message: 'We have received your download request. The file will be sent to your registered email ID shortly.',
      class: 'sb-toaster sb-toast-success',
      position: 'center',
      timeout: 100000000,
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX'
    });
  }

  WarningToaster() {
    this.iziToast.show({
      title: 'Download failed!',
      message: 'Your profile does not have a valid email ID. Please update your email ID.',
      class: 'sb-toaster sb-toast-warning',
      icon: 'warning icon',
      position: 'center',
      timeout: 100000000,
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX'
    });
  }

  ErrorToaster() {
    this.iziToast.show({
      title: 'Delete this Content Type',
      message: 'When you delete a folder you also delete all of its contents.',
      class: 'sb-toaster sb-toast-danger',
      icon: 'plus icon',
      position: 'center',
      timeout: 100000000,
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX'
    });
  }

  ngOnInit() { }

}
