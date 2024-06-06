import './OceanData.css';

function OceanData({data}) {
  return (
    <table className="OceanData">
      <thead>
        <tr>
          <th>região</th>
          <th>temperatura água</th>
          <th>pH</th>
          <th>nível poluição</th>
          <th>espécies</th>
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, key) => <tr key={key}>
          <td>{rowData.regiao}</td>
          <td>{rowData.temperaturaAgua}</td>
          <td>{rowData.pH}</td>
          <td>{rowData.NivelPoluicao}</td>
          <td>{rowData.especies.map((especie, key) => especie.nome + ', ')}</td>
        </tr>)}
      </tbody>
    </table>
  );
}

export default OceanData;
