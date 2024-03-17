using api14232.DAL.Models;
using api14232.DAL.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api14232.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KeyController : ControllerBase
    {
        private IRepository<Key> _keyRepository;

        public KeyController(IRepository<Key> keyRepository)
        {
            _keyRepository = keyRepository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _keyRepository.GetAllAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var foundKey = await _keyRepository.GetByIdAsync(id);
            if (foundKey != null)
            {
                return Ok(foundKey);
            }
            return NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteById(int id)
        {
            var foundKey = await _keyRepository.GetByIdAsync(id);
            if (foundKey != null)
            {
                await _keyRepository.DeleteAsync(id);
                return NoContent();
            }
            return NotFound();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateById(int id, Key model)
        {
            var foundKey = await _keyRepository.GetByIdAsync(id);
            if (foundKey != null)
            {
                return Ok(await _keyRepository.UpdateAsync(id, model));
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> Create(Key model)
        {
            try
            {
                await _keyRepository.CreateAsync(model);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            return Ok();
        }
    }
}
