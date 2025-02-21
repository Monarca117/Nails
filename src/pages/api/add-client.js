
import { turso } from '../../lib/turso.js';

export async function post({ request }) {
  try {
    const formData = await request.formData();
    const nombre = formData.get('nombre');
    const apellido_paterno = formData.get('apellido_paterno');
    const apellido_materno = formData.get('apellido_materno');
    const correo = formData.get('correo');
    const telefono = formData.get('telefono');

    await turso.execute({
      sql: 'INSERT INTO Clientes (nombre_Cliente, apellido_Paterno, apellido_Materno, correo, telefono) VALUES (?, ?, ?, ?, ?)',
      args: [nombre, apellido_paterno, apellido_materno, correo, telefono],
    });

    return new Response(null, {
      status: 303,
      headers: {
        Location: '/clients',
      },
    });
  } catch (error) {
    console.error('Error al agregar cliente:', error);
    return new Response(JSON.stringify({ error: 'Error al agregar cliente' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}