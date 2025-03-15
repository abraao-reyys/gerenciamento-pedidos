<script setup></script>

<template>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>PRODUTO</th>
                    <th>TIPO</th>
                    <th>QTD</th>
                </tr>
            </thead>
        </table>
        <div class="table-body">
            <table>
                <tbody>
                    <tr>
                        <td>AÇÚCAR DEMERARA KG</td>
                        <td>SC</td>
                        <td>002</td>
                    </tr>
                    <tr>
                        <td>FLOCÃO CORINGA 500G</td>
                        <td>FD</td>
                        <td>004</td>
                    </tr>
                    <tr>
                        <td>MACAR BANDINE ESPAGUETE</td>
                        <td>FD</td>
                        <td>001</td>
                    </tr>
                    <tr>
                        <td>ARROZ URBANO 5KG</td>
                        <td>UN</td>
                        <td>005</td>
                    </tr>
                    <tr>
                        <td>ARROZ TIO URBANO KG</td>
                        <td>FD</td>
                        <td>002</td>
                    </tr>
                    <tr>
                        <td>VINAGRE MARATÁ 500ML</td>
                        <td>FD</td>
                        <td>001</td>
                    </tr>
                    <tr>
                        <td>CAFÉ MARATÁ 250G</td>
                        <td>FD</td>
                        <td>004</td>
                    </tr>
                    <tr>
                        <td>SARDINHA 88 ÓLEO</td>
                        <td>CX</td>
                        <td>001</td>
                    </tr>
                    <tr>
                        <td>MARG DELÍCIA 250G</td>
                        <td>FD</td>
                        <td>004</td>
                    </tr>
                    <tr>
                        <td>BISC RECH AMORI MORANGO 250G</td>
                        <td>CX</td>
                        <td>002</td>
                    </tr>
                    <tr>
                        <td>ESPONJA AÇO ASSOLAN</td>
                        <td>FD</td>
                        <td>002</td>
                    </tr>
                    <tr>
                        <td>SARDINHA 88 ÓLEO</td>
                        <td>CX</td>
                        <td>001</td>
                    </tr>
                    <tr>
                        <td>ESPONJA AÇO ASSOLAN</td>
                        <td>FD</td>
                        <td>002</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <ShareButtons />
</template>

<style scoped>
.table-container {
  width: 340px;

  margin-top: var(--spacing-slg);
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: var(--font-size-sm);
  color: var(--quaternary);

  border-radius: 10px;
  overflow: hidden;
}

.table-container > table {
    table-layout: fixed;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    th:nth-of-type(1) {
        width: 70%;
    }
}

.table-body > table {
    border-bottom-left-radius: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--text);
}

th, td {
  padding: var(--spacing-sm);
  text-align: left;
  border-bottom: 1px solid rgba(55, 75, 87, 0.5);
}

tr:last-of-type td {
  border-bottom: none;
}

.table-body {
  max-height: 360px;
  overflow-y: auto;
  overflow-x: hidden;
}

.table-body table {
  width: 100%;
  border-collapse: collapse;
}

.table-body::-webkit-scrollbar {
  width: 8px;              /* Largura da barra */
}

.table-body::-webkit-scrollbar-track {
  background: #e0e0e0;     /* Fundo da barra */
}

.table-body::-webkit-scrollbar-thumb {
  background-color: #888;  /* Cor da "bolinha" da barra */
  border: 2px solid #e0e0e0;
}

.table-body::-webkit-scrollbar-thumb:hover {
  background-color: #555;  /* Cor ao passar o mouse */
  cursor: grab;
}

</style>