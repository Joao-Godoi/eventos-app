/* eslint-disable @typescript-eslint/no-explicit-any */
export default function EventAdminPage(props: any) {
  const id = props.params.all[0];
  const password = props.params.all[1];

  return (
    <div className="flex flex-col">
      <span>Id: {id}</span>
      <span>Senha: {password}</span>
    </div>
  );
}