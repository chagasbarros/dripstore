import { useEffect, useState } from "react";
import {
  Search,
  ShoppingBag,
  Star,
  Filter,
  Grid,
  List,
  Plus,
  X,
} from "lucide-react";

export default function ListaProdutos() {
  // Estados
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [busca, setBusca] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    descricao: "",
    preco: "",
    categoria: "",
    estoque: "",
    imagem: "",
  });

  // Configuração da API
  const API_URL = "http://localhost:3000/produtos";

  // Buscar produtos da API
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Erro ao carregar produtos: ${response.status}`);
        }

        const data = await response.json();

        // Adaptar e validar os dados
        const produtosAdaptados = data.map((produto) => {
          // Garantir que preço é número
          const preco =
            typeof produto.preco === "string"
              ? parseFloat(produto.preco.replace(",", "."))
              : Number(produto.preco);

          return {
            ...produto,
            id: produto.id,
            nome: produto.nome || "Sem nome",
            descricao: produto.descricao || "",
            preco: isNaN(preco) ? 0 : preco,
            categoria: produto.categoria || "Sem categoria",
            estoque: produto.quantidade_estoque || 0,
            imagem: produto.imagem || "https://via.placeholder.com/300",
          };
        });

        setProdutos(produtosAdaptados);
        setProdutosFiltrados(produtosAdaptados);
        setError(null);
      } catch (err) {
        setError(err);
        console.error("Erro ao buscar produtos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  // Filtros
  useEffect(() => {
    let produtosFiltradosTemp = produtos;

    if (busca) {
      produtosFiltradosTemp = produtosFiltradosTemp.filter(
        (produto) =>
          produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
          (produto.descricao &&
            produto.descricao.toLowerCase().includes(busca.toLowerCase()))
      );
    }

    if (categoriaFiltro) {
      produtosFiltradosTemp = produtosFiltradosTemp.filter(
        (produto) => produto.categoria === categoriaFiltro
      );
    }

    setProdutosFiltrados(produtosFiltradosTemp);
  }, [busca, categoriaFiltro, produtos]);

  // Funções auxiliares
  const categorias = [
    ...new Set(produtos.map((produto) => produto.categoria).filter(Boolean)),
  ];

  const limparFiltros = () => {
    setBusca("");
    setCategoriaFiltro("");
  };

  // Funções do modal
  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setNovoProduto({
      nome: "",
      descricao: "",
      preco: "",
      categoria: "",
      estoque: "",
      imagem: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto({
      ...novoProduto,
      [name]: value,
    });
  };

  // Adicionar novo produto
  const adicionarProduto = async () => {
    // Validação
    if (
      !novoProduto.nome ||
      !novoProduto.descricao ||
      !novoProduto.preco ||
      !novoProduto.categoria ||
      !novoProduto.estoque
    ) {
      alert("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    try {
      setIsSubmitting(true);

      const precoNumerico = parseFloat(
        novoProduto.preco.toString().replace(",", ".")
      );
      const estoqueNumerico = parseInt(novoProduto.estoque);

      if (isNaN(precoNumerico) || isNaN(estoqueNumerico)) {
        throw new Error("Preço e estoque devem ser números válidos");
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: novoProduto.nome,
          descricao: novoProduto.descricao,
          preco: precoNumerico,
          categoria: novoProduto.categoria,
          estoque: estoqueNumerico,
          imagem: novoProduto.imagem || "https://via.placeholder.com/300",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.erro || `Erro ${response.status} ao criar produto`
        );
      }

      const produtoCriado = await response.json();

      // Adaptar o produto retornado para o frontend
      const produtoAdaptado = {
        ...produtoCriado.produto,
        id: produtoCriado.produto.id,
        estoque: produtoCriado.produto.quantidade_estoqueestoque || 0,
        imagem:
          produtoCriado.produto.imagem || "https://via.placeholder.com/300",
        preco:
          typeof produtoCriado.produto.preco === "string"
            ? parseFloat(produtoCriado.produto.preco.replace(",", "."))
            : Number(produtoCriado.produto.preco),
      };

      setProdutos([...produtos, produtoAdaptado]);
      setProdutosFiltrados([...produtosFiltrados, produtoAdaptado]);
      fecharModal();
    } catch (err) {
      console.error("Erro ao criar produto:", err);
      alert(`Erro: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função para formatar o preço corretamente
  const formatarPreco = (preco) => {
    if (preco === undefined || preco === null) return "0,00";

    const numero =
      typeof preco === "string"
        ? parseFloat(preco.replace(",", "."))
        : Number(preco);

    return isNaN(numero) ? "0,00" : numero.toFixed(2).replace(".", ",");
  };

  // Renderização condicional
  if (loading) {
    return (
      <div className="container my-5">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "400px" }}
        >
          <div className="text-center">
            <div
              className="spinner-border text-primary mb-3"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <h4 className="text-muted">Carregando produtos...</h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light" style={{ minHeight: "70vh" }}>
      {/* Seção de Filtros */}
      <div className="bg-white shadow-sm py-4">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <h2 className="mb-0 fw-bold text-dark">
                <ShoppingBag className="me-2 text-danger" size={28} />
                Produtos Cadastrados
              </h2>
            </div>
            <div className="col-md-6 text-end">
              <div className="d-flex align-items-center justify-content-end">
                <div className="btn-group me-3" role="group">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`btn ${
                      viewMode === "grid" ? "btn-danger" : "btn-outline-danger"
                    }`}
                    title="Visualização em Grade"
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`btn ${
                      viewMode === "list" ? "btn-danger" : "btn-outline-danger"
                    }`}
                    title="Visualização em Lista"
                  >
                    <List size={18} />
                  </button>
                </div>
                <button
                  onClick={abrirModal}
                  className="btn btn-danger"
                  title="Adicionar novo produto"
                >
                  <Plus size={18} className="me-1" />
                  Adicionar
                </button>
              </div>
            </div>
          </div>

          {/* Exibir erros */}
          {error && (
            <div className="alert alert-danger mb-4">
              <button
                type="button"
                className="btn-close float-end"
                onClick={() => setError(null)}
              />
              <strong>Erro:</strong> {error.message}
            </div>
          )}

          {/* Filtros */}
          <div className="row g-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <Search size={18} className="text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Buscar produtos..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <Filter size={18} className="text-muted" />
                </span>
                <select
                  className="form-select border-start-0"
                  value={categoriaFiltro}
                  onChange={(e) => setCategoriaFiltro(e.target.value)}
                >
                  <option value="">Todas as categorias</option>
                  {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-md-2">
              {(busca || categoriaFiltro) && (
                <button
                  onClick={limparFiltros}
                  className="btn btn-outline-secondary w-100"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Produtos */}
      <div className="container py-5">
        {produtosFiltrados.length === 0 ? (
          <div className="text-center py-5">
            <div className="bg-white rounded shadow-sm p-5">
              <ShoppingBag className="text-muted mb-3" size={64} />
              <h3 className="text-muted mb-2">Nenhum produto encontrado</h3>
              <p className="text-muted">Tente ajustar os filtros de busca</p>
              {(busca || categoriaFiltro) && (
                <button
                  onClick={limparFiltros}
                  className="btn btn-primary mt-3"
                >
                  Ver todos os produtos
                </button>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-muted mb-0">
                  <strong>{produtosFiltrados.length}</strong> produto
                  {produtosFiltrados.length !== 1 ? "s" : ""} encontrado
                  {produtosFiltrados.length !== 1 ? "s" : ""}
                  {busca && ` para "${busca}"`}
                  {categoriaFiltro && ` na categoria "${categoriaFiltro}"`}
                </p>
              </div>
            </div>

            {viewMode === "grid" ? (
              <div className="row g-4">
                {produtosFiltrados.map((produto) => (
                  <div key={produto.id} className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card h-100 shadow-sm border-0 produto-card">
                      <div className="position-relative overflow-hidden">
                        <div className="position-absolute top-0 end-0 p-2">
                          <button className="btn btn-light btn-sm rounded-circle shadow-sm">
                            <Star size={16} className="text-warning" />
                          </button>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-column">
                        <div className="mb-2">
                          <span className="badge bg-light text-dark border me-2">
                            Estoque: {produto.estoque || 0}
                          </span>
                          <span className="badge bg-danger rounded-pill">
                            {produto.categoria || "Sem categoria"}
                          </span>
                        </div>
                        <h5 className="card-title fw-bold mb-2">
                          {produto.nome || "Sem nome"}
                        </h5>
                        <p className="card-text text-muted small flex-grow-1 mb-3">
                          {produto.descricao || "Sem descrição"}
                        </p>
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                          <div>
                            <span className="h5 text-dark fw-bold mb-0">
                              R$ {formatarPreco(produto.preco)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row g-3">
                {produtosFiltrados.map((produto) => (
                  <div key={produto.id} className="col-12">
                    <div className="card shadow-sm border-0">
                      <div className="row g-0">
                        <div className="col-md-9">
                          <div className="card-body h-100 d-flex flex-column">
                            <div className="d-flex justify-content-between">
                              <div className="flex-grow-1">
                                <div className="mb-2">
                                  <span className="badge bg-danger rounded-pill me-2">
                                    {produto.categoria || "Sem categoria"}
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Estoque: {produto.estoque || 0}
                                  </span>
                                </div>
                                <h5 className="card-title fw-bold">
                                  {produto.nome || "Sem nome"}
                                </h5>
                                <p className="card-text text-muted">
                                  {produto.descricao || "Sem descrição"}
                                </p>
                              </div>
                              <div className="d-flex flex-column align-items-end ms-4">
                                <span className="h4 text-dark fw-bold mb-3">
                                  R$ {formatarPreco(produto.preco)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal de Cadastro */}
      {modalAberto && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">Cadastrar Novo Produto</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={fecharModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Nome do Produto*</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nome"
                      value={novoProduto.nome}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Categoria*</label>
                    <select
                      className="form-select"
                      name="categoria"
                      value={novoProduto.categoria}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Selecione uma categoria</option>
                      {categorias.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                      <option value="nova">+ Adicionar nova categoria</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Descrição*</label>
                    <textarea
                      className="form-control"
                      name="descricao"
                      value={novoProduto.descricao}
                      onChange={handleInputChange}
                      rows="3"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Preço (R$)*</label>
                    <div className="input-group">
                      <span className="input-group-text">R$</span>
                      <input
                        type="text"
                        className="form-control"
                        name="preco"
                        value={novoProduto.preco}
                        onChange={handleInputChange}
                        placeholder="0,00"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Estoque*</label>
                    <input
                      type="number"
                      className="form-control"
                      name="estoque"
                      value={novoProduto.estoque}
                      onChange={handleInputChange}
                      min="0"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">URL da Imagem</label>
                    <input
                      type="url"
                      className="form-control"
                      name="imagem"
                      value={novoProduto.imagem}
                      onChange={handleInputChange}
                      placeholder="Opcional"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={fecharModal}
                >
                  <X size={18} className="me-1" /> Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={adicionarProduto}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-1"></span>
                      Salvando...
                    </>
                  ) : (
                    <>
                      <Plus size={18} className="me-1" /> Salvar Produto
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
