import { ElementRef } from '@angular/core';
import { options } from 'tsconfig-paths/lib/options';

declare var M;

export interface MaterialInstance {
  open?(): void;
  close?(): void;
  destroy?(): void;
}

export interface MaterialDatePicker extends MaterialInstance {
  date?: Date;
}

export interface MaterialDropdown extends MaterialInstance {
  dropdown?(): void;
}

export interface MaterialSidenav extends MaterialInstance {
  sidenav();
}

export class MaterialService {
  static toast(message: string) {
    M.toast({
      html: message,
    });
  }

  static updateTextInputs() {
    M.updateTextFields();
  }

  static initModal(ref: ElementRef): MaterialInstance {
    return M.Modal.init(ref.nativeElement);
  }

  static initDatepicker(ref: ElementRef, onClose: () => void): MaterialDatePicker {
    return M.Datepicker.init(ref.nativeElement, {
      onClose,
      format: 'dd.mm.yyyy',
      showClearBtn: true,
    });
  }

  static initSelectField(ref: ElementRef): MaterialInstance {
    return M.FormSelect.init(ref.nativeElement);
  }

  // tslint:disable-next-line:no-shadowed-variable
  static initDropdown(ref: ElementRef, options): MaterialDropdown {
    return M.Dropdown.init(ref.nativeElement, options);
  }

  static initSidenav(ref: ElementRef): MaterialSidenav {
    return M.Sidenav.init(ref.nativeElement);
  }

}
