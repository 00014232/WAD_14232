using api14232.DAL.Models;
using api14232.DAL.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api14232.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LockController : ControllerBase
    {
        private IRepository<Lock> _lockRepository;

        public LockController(IRepository<Lock> lockRepository)
        {
            _lockRepository = lockRepository;
        }

        [HttpGet]
        public async Task<IActionResult> Get() 
        { 
            return Ok(await _lockRepository.GetAllAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var foundLock = await _lockRepository.GetByIdAsync(id);
            if (foundLock != null)
            {
                return Ok(foundLock);
            }
            return NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteById(int id)
        {
            var foundLock = await _lockRepository.GetByIdAsync(id);
            if (foundLock != null)
            {
                await _lockRepository.DeleteAsync(id);
                return NoContent();
            }
            return NotFound();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateById(int id, Lock model)
        {
            var foundLock = await _lockRepository.GetByIdAsync(id);
            if (foundLock != null)
            {
                return Ok(await _lockRepository.UpdateAsync(id, model));
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> Create(Lock model)
        {
            try
            {
                await _lockRepository.CreateAsync(model);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            return Ok();
        }
    }
}
