using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace src.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarrosController : ControllerBase
    {
        private static List<Carro> db;
        static CarrosController()
        {
            db = new List<Carro>(){
                new Carro() { Id = 1, Marca = "something", Modelo= "some desc", Precio = 0},
                new Carro() { Id = 2, Marca = "something", Modelo= "some desc", Precio = 0},
            };
        }
        // GET: api/Carros
        [HttpGet]
        public ActionResult<IEnumerable<Carro>> Get2()
        {
            return db;
        }

        // GET: api/Carros/5
        [HttpGet("{id}", Name = "Get2")]
        public ActionResult<Carro> Get2(int id)
        {
            var t = db.FirstOrDefault(ta => ta.Id == id);
            if (t == null)
            {
                return NotFound();
            }

            return t;
        }

        // POST: api/Carros
        [HttpPost]
        public void Post(Carro model)
        {
            var newId = 0;
            if (db.Count > 0)
            {
                newId = db.Max(a => a.Id) + 1;
            }
            model.Id = newId;

            db.Add(model);
        }

        // PUT: api/Carros/5
        [HttpPut("{id}")]
        public ActionResult Put(Carro update)
        {
            var t = db.FirstOrDefault(ta => ta.Id == update.Id);
            if (t == null)
            {
                return NotFound();
            }

            t.Marca = update.Marca;
            t.Modelo = update.Modelo;
            t.Precio =update.Precio;
            
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var t = db.FirstOrDefault(ta => ta.Id == id);
            if (t == null)
            {
                return NotFound();
            }
            db.Remove(t);
            return Ok();
        }
    }
}
