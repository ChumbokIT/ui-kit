<div class="modal fade" id="themeChooserModal" tabindex="-1" role="dialog" aria-labelledby="themeChooserModalLabel" aria-hidden="true">

    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="themeChooserModalLabel">Change Theme</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">

                <form>
                    <div class="form-group">

                        <div class="currentTheme">
                            <label for="currentTheme" class="col-form-label">Current theme: </label>
                            <input type="text" readonly class="form-control-plaintext font-weight-bold" id="currentThemeName" value="Rebecca Purple">
                        </div>

                        <label for="exampleFormControlSelect1">Choose theme: </label>
                        <select class="form-control" id="themeChooserDropdown">
                            <option>Rebecca Purple</option>
                            <option>Dark Slate Blue</option>
                            <option>Orange Red</option>
                        </select>
                    </div>
                </form>

            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>

        </div>
    </div>
</div>