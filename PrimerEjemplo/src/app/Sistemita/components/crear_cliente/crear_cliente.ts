import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClientesPanel } from '../clientes_panel/clientes_panel';

@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [ClientesPanel],
  templateUrl: './crear_cliente.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrearCliente {}
