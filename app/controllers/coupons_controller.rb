class CouponsController < ApplicationController
  before_action :set_coupon, only: [:destroy, :update, :edit, :show]
  def update
    @coupon.used_at=Time.now
    respond_to do |format|
      if @coupon.update(coupon_params)
        format.html { redirect_to coupon_path(@coupon.code), notice: 'Coupon was successfully updated.' }
        format.json { render action: 'show', status: :ok, location: @coupon }
      else
        format.html { render action: 'edit' }
        format.json { render json: @coupon.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
    if @coupon.is_used? == "used"
      redirect_to coupons_path(@coupon.code)
    end
  end
  
  def show
    if @coupon.is_used? == "used"
    else
      redirect_to edit_coupon_path(@coupon.code)
    end
  end
  
  private
  # Use callbacks to share common setup or constraints between actions.
  def set_coupon
    @coupon = Coupon.find_by_code(params[:code])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def coupon_params
    params[:user] = {status: "used"}
  end
    
end
