import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClientesPanel } from '../clientes_panel/clientes_panel';

@Component({
  selector: 'app-consulta-cliente',
  standalone: true,
  imports: [ClientesPanel],
  templateUrl: './consulta_cliente.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultaCliente {}
