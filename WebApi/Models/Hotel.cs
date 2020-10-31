using System;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Hotel
    {
        [Key]
        public int HotelId { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatório.")]
        [MaxLength(80, ErrorMessage = "Este campo deve conter no máximo 80 caracteres.")]
        public string NomeHotel { get; set; }

        [MaxLength(300, ErrorMessage = "Este campo deve conter no máximo 300 caracteres.")]
        public string Descricao { get; set; }

        public int Avaliacao { get; set; }

        public string Comodidade { get; set; }

        public string Logradouro { get; set; }

        [MaxLength(80, ErrorMessage = "Este campo deve conter no máximo 80 caracteres.")]
        public string Cidade { get; set; }

        [MaxLength(80, ErrorMessage = "Este campo deve conter no máximo 80 caracteres.")]
        public string Bairro { get; set; }

        [MaxLength(15, ErrorMessage = "Este campo deve conter no máximo 15 caracteres.")]
        public string Cep { get; set; }

        [MaxLength(2, ErrorMessage = "Este campo deve conter no máximo 2 caracteres.")]
        public string Uf { get; set; }

        public int Numero { get; set; }

        /* ---------------- */

        [MaxLength(300, ErrorMessage = "Este campo deve conter no máximo 300 caracteres.")]
        public string Observacao { get; set; }

        public bool Ativo { get; set; }

        /*
            Controle de Criação, Edicao e Deleção. 
        */
        public DateTime? DataCreate { get; set; }

        // public int? UsuarioCreate { get; set; }
        public DateTime? DataUpdate { get; set; }

        // public int? UsuarioUpdate { get; set; }
        public DateTime? DataDelete { get; set; }

        // public int? UsuarioDelete { get; set; }
    }
}
