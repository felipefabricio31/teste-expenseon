using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Data;
using WebApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [Route("v1/hoteis")]
    [ApiController]
    public class HotelController : ControllerBase
    {
        #region GET

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<Hotel>>> Get([FromServices] DataContext context)
        {
            var hoteis = await context.Hotel
                .AsNoTracking()
                .Where(x => x.Ativo == true)
                .ToListAsync();

            return hoteis;
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<ActionResult<Hotel>> GetById([FromServices] DataContext context, int id)
        {
            var hotel = await context.Hotel
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.HotelId == id);

            return hotel;
        }

        #endregion

        #region POST

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Hotel>> Post([FromServices] DataContext context, [FromBody] Hotel model)
        {
            if (ModelState.IsValid)
            {
                model.DataCreate = DateTime.Now;
                //
                context.Hotel.Add(model);
                await context.SaveChangesAsync();
                return model;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        #endregion

        #region PUT

        [HttpPut]
        public async Task<ActionResult<Hotel>> Put([FromServices] DataContext context, [FromBody] Hotel model)
        {
            if (ModelState.IsValid)
            {
                DataContext context2 = new DataContext();
                var modelOld = context2.Hotel.Find(model.HotelId);
                model.DataCreate = modelOld.DataCreate;
                //
                model.DataUpdate = DateTime.Now;
                //
                context.Entry<Hotel>(model).State = EntityState.Modified;
                await context.SaveChangesAsync();
                return model;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        #endregion

        #region DELETE

        [HttpDelete]
        [Route("delete/{id:int}")]
        public async Task<ActionResult<Hotel>> Delete([FromServices] DataContext context, int id)
        {
            if (ModelState.IsValid)
            {
                var model = context.Hotel.Find(id);
                model.DataDelete = DateTime.Now;
                model.Ativo = false;
                //
                context.Entry<Hotel>(model).State = EntityState.Modified;
                await context.SaveChangesAsync();
                return model;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        #endregion

    }
}